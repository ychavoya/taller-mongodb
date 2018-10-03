/*
=====================================
Ejercicio 1:

Crear una base de datos cualquiera
Crear dos colecciones cualesquiera
Mostrar las bases de datos
Eliminar una colección
Eliminar la base de datos creada

=====================================
*/

// Crear base de datos
use basedatos

// Crear colecciones
db.createCollection('uno')
db.createCollection('dos')

// Mostrar bases de datos
show dbs

// Eliminar una colección
db.runCommand({
    drop: 'dos'
})

// Eliminar la base de datos
db.dropDatabase()