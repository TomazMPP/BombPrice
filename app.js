const express = require('express');
const fetch = require('node-fetch');
const cheerio = require('cheerio');
const cors = require('cors');

const app = express();
app.use(cors());
app.get('/hero/:heroId', async (req, res) => {
    const heroId = req.params.heroId;
    try {
        const response = await fetch(`https://api.bcrypt.com.br/bhero/pol/${heroId}`);
        const html = await response.text();
        const $ = cheerio.load(html);
        const jsonData = $('body').text();
        const data = JSON.parse(jsonData);
        res.json(data);
    } catch (error) {
        console.error('Erro ao obter dados:', error);
        res.status(500).json({ error: 'Erro ao obter dados' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
