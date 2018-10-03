/*
=====================================
Ejercicio 4:

Cargar los documentos del material '01-papeleria.js'
- Duplicar la cantidad de todos los documentos con cantidad ≤ 50.
- Renombrar tamaño como medidas en todos los documentos.
- Reemplazar el primer documento con estado D por un objeto vacío.
- Actualizar el primer documento que tenga un arreglo en colores y agregarle "gris" a éste.
- Eliminar todos los documentos con estado igual a F.

=====================================
*/

// Duplicar la cantidad de todos los documentos con cantidad ≤ 50.
db.inventario.updateMany({
    cantidad: { $lte: 50 }
},{
    $mul: { cantidad: 2 }    
})

// Renombrar tamaño como medidas en todos los documentos.
db.inventario.updateMany({},{
    $rename: { tamaño: "medidas" }
})

// Reemplazar el primer documento con estado D por un objeto vacío.
db.inventario.replaceOne({ estado: "D" },{})

//  Actualizar el primer documento que tenga un arreglo en colores
// y agregarle "gris" a éste.
db.inventario.updateOne({
    colores: {$type: "array"}
}, {
    $push: { colores: "gris" }
})

// Eliminar todos los documentos con estado igual a F.
db.inventario.deleteMany({ estado: "F" })