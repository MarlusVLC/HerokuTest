const express = require('express');
const app = express();

var port = process.env.PORT || 80

console.log("Diretório: " + __dirname);

app.get('/', (req, res) => {
    res.send('Olá mundo :x');
})

app.get('/player', (req, res) => {
    res.send('WLCOME TO HEEL sisisisi');
})

app.listen(port, () => {
    console.log('Server iniciado....');
})