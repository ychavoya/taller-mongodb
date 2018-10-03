// Modificar uno o varios documentos
// db.colección.updateOne(filtro, actualizar)
// db.colección.updateMany(filtro, actualizar)

// Reemplazar un documento
// db.colección.replaceOne(viejo, nuevo)

/*
========================
Operadores de modificación

Generales
$set            Actualiza o crea un campo
$unset          Elimina el campo del documento 
$inc            Incrementa el valor
$currentDate    Inserta la fecha actual
$rename         Renombra un campo
$min            Actualiza si es menor al actual
$max            Actualiza si es mayot al actual
$mul            Multiplica el valor

Arreglo
$push           Inserta
$addToSet       Inserta si aún no existe
$pop            Elimina el primer (-1) o último (1) elemento
$pull           Elimina los elementos que cumplen la condición

                $addToSet: { colores: "azul" }
                $push: { colores: "amarillo" }
                $pop: { colores: -1 }
                $pull: { colores: /^v/ }

========================
*/

// Generales
db.inventario.updateMany({
    estado: "A"
 },{
    $set: {
        estado: "B",
        "tamaño.unidades": "m"
    },
    $inc: { cantidad: 2 },
    $rename: { "tamaño.alto": "tamaño.altura" }
})

// Arreglos
db.inventario.updateOne({
    colores: {
        $exists: true,
        $type: "array"
    }
},{
    $push: { colores: "amarillo" },
})

// Reemplazar
db.inventario.replaceOne({
    estado: "F"
},{
    cantidad: 27
})