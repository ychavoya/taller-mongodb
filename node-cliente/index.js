// Importar librerías
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const opn = require('opn');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Mostrar que funciona
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/menu.html'));
});

// Rutas
app.use(require('./routes/consultar'));
app.use(require('./routes/insertar'));
app.use(require('./routes/modificar'));
app.use(require('./routes/eliminar'));

// Levantar el servidor en el puerto especificado
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Escuchando puerto ${PORT}`);
    opn(`http://localhost:${PORT}`);
});