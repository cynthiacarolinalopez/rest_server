const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

//pp.get('/', (req, res) => {
//res.send('Hola Mundo')
//let salida = {
// nombre: 'cynthia',
//edad: 32,
//url: req.url
//};

//res.send(salida);

//});

app.listen(3000, () => {
    console.log('Escuchando peticiones del puerto 3000');
});