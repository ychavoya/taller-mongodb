// Material para el ejercicio 3

use papeleria

db.inventario.deleteMany({})

db.inventario.insertMany([
    {
        _id: "diario",
        cantidad: 25,
        tamaño: {
            alto: 14,
            ancho: 21,
            unidades: "cm"
        },
        estado: "A",
        colores: ["negro", "verde", "azul"]
    },
    {
        _id: "cuaderno",
        cantidad: 50,
        tamaño: {
            alto: 8.5,
            ancho: 11,
            unidades: "in"
        },
        estado: "A",
        colores: ["negro", "blanco", "verde"]
    },
    {
        _id: "papel",
        cantidad: 100,
        tamaño: {
            alto: 8.5,
            ancho: 11,
            unidades: "in"
        },
        estado: "D",
        colores: "blanco"
    },
    {
        _id: "agenda",
        cantidad: 75,
        tamaño: {
            alto: 22.85,
            ancho: 30,
            unidades: "cm"
        },
        estado: "D",
        colores: ["morado", "verde"]
    },
    {
        _id: "postal",
        cantidad: 45,
        tamaño: {
            alto: 10,
            ancho: 15.25,
            uom: "cm"
        },
        estado: "F"
    },
    {
        _id: "estampilla",
        cantidad: 300,
        tamaño: {
            alto: 4,
            ancho: 3,
            unidades: "cm"
        },
        estado: "F"
    }
]);