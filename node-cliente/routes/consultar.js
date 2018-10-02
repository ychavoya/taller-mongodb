// Importación de librerías necesarias
const express = require('express');
let app = express();
const MongoClient = require('mongodb').MongoClient;

// =========================================
// Dirección del servidor MongoDB
const URL = 'mongodb://localhost:27017';
// =========================================

// Al ingresar a http://localhost:8080/consultar, hacer esto
app.get('/consultar', (req, res) => {

    // Creamos un nuevo cliente para conectar al servidor
    let mongo = new MongoClient(URL, {useNewUrlParser: true});

    // Conectamos al servidor
    mongo.connect((err) => {

        // ==========================================
        // Base de datos a conectarse
        const databaseName = 'papeleria';
        // =========================================
        // Colección a modificar
        const collectionName = 'inventario-dos';
        // ==========================================
        // Objeto filtro que se usa para la consulta
        const filtro = {
            nombre: {
                $exists: true
            }
        }
        // ==========================================

        // Conectamos a la base de datos
        let db = mongo.db(databaseName);
        // Conectamos a la colección
        let collection = db.collection(collectionName);
    
        // Hacemos la consulta a la colección, con el filtro
        collection.find(filtro).toArray((err, result) => {

            // Mostramos un mensaje de lo que hicimos
            console.log('Búsqueda realizada de ', JSON.stringify(filtro));

            // Mostramos en la página el resultado recibido
            return res.json(result);
        })
    
        // Cerramos la conexión a la base de datos
        mongo.close();

    });
});

module.exports = app;