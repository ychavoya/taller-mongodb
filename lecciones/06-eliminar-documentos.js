// Eliminar uno o varios documentos
// db.colección.deleteOne(filtro)
// db.colección.deleteMany(filtro)

// Ejemplo
db.inventario.deleteOne({
    cantidad: { $lt: 5 }
})