// Ver documentos
// db.colección.find(filtro)

// Ver todos los documentos
db.colección.find({})

// Condición de igualdad
db.colección.find({
    campo1: valor1,
    campo2: valor2
})

/*
========================
Operadores de consulta

Comparación
$eq         Igualdad
$ne         Diferencia
$gt         Mayor que
$gte        Mayor o igual que
$lt         Menor que
$lte        Menor o igual que
$in         Es cualquiera de 
$nin        Es ninguno de
$regex      Cumple con la expresión regular

Lógicos
$and        Cumple ambas condiciones
$not        No cumple la condición
$nor        No cumple ninguna condición
$or         Cumple una condición

Elemento
$exists     Tiene el campo, aunque sea nulo
$type       Es del tipo especificado

Arreglo
$all        Contiene todos los elementos dados
$elemMatch  Contiene un elemento que cumple la condición
$size       Es del tamaño especificado
========================
*/

// Sintaxis básica
db.colección.find({
    campo1: { 
      $op1: valor,
      $op2: valor
    },
    campo2: { $op3: valor }
})

// Comparación
db.platillos.find({
    precio: {
        $lt: 40,
        $ne: 30
    },
    categoria: {
         $in: [ "Desayuno", "Mexicana"]
    } 
})

// Lógicos
db.platillos.find({
    $or: [
        { precio: { $gte: 35 } },
        { nombre: "Enchiladas" }
    ]
})

// Elemento
db.platillos.find({
    ingredientes: {
        $exists: false
    },
    categoria: {
        $type: "string"
    }
})

// Arreglo
db.platillos.find({
    ingredientes: {
        $size: 3,
        $all: ["carne", "salsa"],
        $elemMatch: { $regex: /a$/ }
    }
})