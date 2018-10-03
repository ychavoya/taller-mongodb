// Insertar uno o varios documentos
// db.colección.insertOne(documento)
// db.colección.insertMany(arreglo)

// Ejemplo de inserción
db.fechas.insertOne({ 
    dia: 'Hoy',
    fecha: new Date()
})

// Ejemplo de inserción múltiple
db.juguetes.insertMany([
    { nombre: 'Trompo', material: 'Madera' },
    { nombre: 'Yo-yo', material: 'Plástico'} 
])

