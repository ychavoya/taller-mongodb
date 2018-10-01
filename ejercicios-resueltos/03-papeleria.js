// Con estado igual a D.
db.inventario.find({
    estado: "D"
})

// Con estado igual a A o igual a D.
db.inventario.find({
    estado: {
        $in: ["A", "D"]
    }
})

// Con cantidad menor a 60 y estado igual a A.
db.inventario.find({
    cantidad: { $lt: 60 },
    estado: "A"
})

// Donde el campo colores no exista, o donde cantidad sea mayor o igual a 75.
db.inventario.find({
    $or: [
        {
            colores: { $exists: false }
        },
        {
            cantidad: { $gte: 75 }
        }
    ]
})

// Donde colores exista y no sea de tipo array.
db.inventario.find({
    colores: {
        $exists: true,
        $not: { $type: "array" }
    }
})

// Con exactamente 3 colores.
db.inventario.find({
    colores: { $size: 3 }
})