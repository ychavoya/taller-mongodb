// Crear base de datos llamada nombreBase
use nombreBase

// Mostrar bases de datos
show dbs

// Eliminar base de datos actual
db.dropDatabase()

// Crear una colección vacía llamada nombre
db.runCommand({
    create: "nombre"
})
// o 
db.createCollection("nombre")

// Eliminar una colección llamada nombre
db.runCommand({
    drop: "nombre"
})

// Obtener una colección llamada nombre (ambos hacen lo mismo)
// db.nombre
// db.getCollection("nombre")
// Ejemplo:
db.nombre.getDB()
db.getCollection('nombre').getDB()