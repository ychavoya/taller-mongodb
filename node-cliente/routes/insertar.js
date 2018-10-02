// Importación de librerías necesarias
const express = require('express');
let app = express();
const MongoClient = require('mongodb').MongoClient;

// =========================================
// Dirección del servidor MongoDB
const URL = 'mongodb://localhost:27017';
// =========================================

// Al ingresar a http://localhost:8080/insertar, hacer esto
app.get('/insertar', (req, res) => {

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
        // Objetos a insertar
        const objetos = [
            {
                nombre: 'hola',
                apellido: 'mundo'
            },
            {
                mensaje: 'insertando desde node',
                fecha: new Date()
            }
        ]
        // ==========================================

        // Conectamos a la base de datos
        let db = mongo.db(databaseName);
        // Conectamos a la colección
        let collection = db.collection(collectionName);
    
        // Hacemos la inserción
        collection.insertMany(objetos, (err, result) => {

            // Mostramos un mensaje de lo que hicimos
            console.log('Objetos insertados: ', JSON.stringify(objetos));

            // Mostramos en la página el resultado recibido
            return res.json(result);
        })
    
        // Cerramos la conexión a la base de datos
        mongo.close();

    });
});

module.exports = app;