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