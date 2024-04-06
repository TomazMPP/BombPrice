document.getElementById('submitBtn').addEventListener('click', async () => {
    const heroId = document.getElementById('heroIdInput').value;
    try {
        const response = await fetch(`https://nft.bcrypt.com.br/bhero/pol/${heroId}`);
        const data = await response.json();
        const nftData = {
            ID: data.id,
            rarity: data.rarity,
            level: data.level,
            bombPower: data.bombPower,
            stamina: data.stamina,
            speed: data.speed,
            image: data.image,
            abilities: data.abilities.map(ability => ({ name: ability }))
        };

        const rarityMap = {
            C: "Common",
            R: "Rare",
            SR: "Super Rare",
            E: "Epic",
            L: "Legend",
            SL: "Super Legend"
          };

          const rarityText = rarityMap[nftData.rarity];

        function mapRarityClass(rarity) {
            return rarity === 'SL' ? 'quadradoSuperLenda' :
                   rarity === 'L' ? 'quadradoLendario' :
                   rarity === 'E' ? 'quadradoEpico' :
                   rarity === 'R' ? 'quadradoRaro' :
                   rarity === 'SR' ? 'quadradoSRaro' :
                   ''
        }
        
        const rarityClass = mapRarityClass(nftData.rarity);
        function mapAbilityIcon(abilityName) {
            return `https://bcrypt.com.br/_next/image?url=%2Fatts%2F${abilityName}_icon.png&w=48&q=75`;
        }
        
        let abilitiesHTML = '';
        
        nftData.abilities.forEach(ability => {
            const abilityIconURL = mapAbilityIcon(ability.name);
            abilitiesHTML += `<img src="${abilityIconURL}" alt="${ability.name}">`;
        });

        const pontuacaoTotal = calcularPontuacaoTotal(nftData);

        const image = `<img src="https://bcrypt.com.br/_next/image?url=%2Fbhero%2F${data.image}&w=128&q=75" alt="Imagem do Heroi" class="imgThing">`;

        const divDados = `
        <div class="${rarityClass}">
        <div>${image}</div>
        <div><strong>ID:</strong> ${nftData.ID}</div>
    <div><strong>Rarity:</strong> ${rarityText} (Level ${nftData.level})</div>
    <div><strong>P: 💥</strong> ${nftData.bombPower} | <strong>ST: <img src="https://bcrypt.com.br/_next/image?url=%2Fskills%2Fskill5.webp&w=32&q=75" alt="Speed Skill" style="width: 13px;"> </strong> ${nftData.stamina} | <strong>SP: <img src="https://bcrypt.com.br/_next/image?url=%2Fskills%2Fskill1.webp&w=32&q=75" alt="Speed Skill" style="width: 15px;"></strong> ${nftData.speed}</div>
       <div class="resultadoAfter">${abilitiesHTML}</div> 
       </div>
       <div>Your hero score is: <strong>${pontuacaoTotal}</strong> (0-10 for ${nftData.rarity})</div>`
        document.querySelector('.mainInfo').innerHTML = divDados;
        console.log(nftData);
    } catch (error) {
        console.error('Erro ao obter dados:', error);
    }
});

function calcularPontuacaoHabilidades(stamina, speed, bombPower, rarity) {
    let pontosPorPontoSkill = 0.25;
    let limiteInferior, limiteSuperior;

    switch(rarity) {
        case 'C':
            limiteInferior = 1;
            limiteSuperior = 3;
            break;
        case 'R':
            limiteInferior = 3;
            limiteSuperior = 6;
            break;
        case 'SR':
            limiteInferior = 6;
            limiteSuperior = 9;
            break;
        case 'E':
            limiteInferior = 9;
            limiteSuperior = 12;
            break;
        case 'L':
            limiteInferior = 12;
            limiteSuperior = 15;
            break;
        case 'SL':
            limiteInferior = 15;
            limiteSuperior = 18;
            break;
        default:
            throw new Error('Raridade inválida.');
    }

    const pontosStamina = Math.max(stamina - limiteInferior, 0) * pontosPorPontoSkill;
    const pontosSpeed = Math.max(speed - limiteInferior, 0) * pontosPorPontoSkill;
    const pontosBombPower = Math.max(bombPower - limiteInferior, 0) * pontosPorPontoSkill;

    const pontuacaoHabilidades = pontosStamina + pontosSpeed + pontosBombPower;
    return pontuacaoHabilidades;
}


function calcularPontuacaoSkills(abilities, habilidades) {
    let pontuacaoSkills = 0;

    console.log("Habilidades:", abilities);

    for (const habilidade in habilidades) {
        if (abilities.find(ability => ability.name === habilidade)) {
            pontuacaoSkills += habilidades[habilidade];
        } 
    }

    if (!abilities.some(ability => Object.keys(habilidades).includes(ability.name))) {
        pontuacaoSkills -= 1;
    }

    return pontuacaoSkills;
}

function calcularPontuacaoTotal(nftData) {
    const habilidadesPorRaridade = {
        SL: {
            pierce_block: 1.87,
            save_battery: 1.6,
            bomb_pass: 0.9,
            treasure_hunter: 1,
            block_pass: 0.5,
            fast_charge: 1.88
        },
        L: {
            pierce_block: 1.95,
            save_battery: 1.3,
            bomb_pass: 0.9,
            treasure_hunter: 1.1,
            fast_charge: 2.5
        },
        E: {
            pierce_block: 2.1,
            save_battery: 1.33,
            treasure_hunter: 1.32,
            fast_charge: 3
        },
        SR: {
            pierce_block: 1.88,
            save_battery: 1.87,
            fast_charge: 4
        },
        R: {
            pierce_block: 2.75,
            fast_charge: 5
        },
        C: {
            fast_charge: 7.5
        }
    };

    const pontuacaoHabilidades = calcularPontuacaoHabilidades(nftData.stamina, nftData.speed, nftData.bombPower, nftData.rarity);
    const pontuacaoSkills = calcularPontuacaoSkills(nftData.abilities, habilidadesPorRaridade[nftData.rarity]);
    const pontuacaoTotal = pontuacaoHabilidades + pontuacaoSkills;
    return pontuacaoTotal;
}
