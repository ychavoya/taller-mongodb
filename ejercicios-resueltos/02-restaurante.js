// Crear base de datos
use restaurante

// Crear colecciones
db.createCollection('platillos')
db.createCollection('empleados')

// Insertar en platillos
db.platillos.insertMany([
    /* 1 */
    {
        nombre: 'Avena',
        categoria: 'Desayuno',
        precio: 12.20
    },
    /* 2 */
    {
        nombre: 'Enchiladas',
        categoria: 'Mexicana',
        ingredientes: [
            'tortilla',
            'salsa',
            'carne'
        ],
        precio: 30.00,
        cantidad: 3
    },
    /* 3 */
    {
        nombre: 'Lasaña',
        categoria: 'Italiana',
        precio: 39.95,
        salsa: {
            nombre: 'Pomodoro',
            ingredientes: ['jitomate', 'especias']
        }
    },
    /* 4 */
    {
        nombre: 'Pozole',
        categoria: 'Mexicana',
        ingredientes: ['carne', 'maíz', 'lechuga'],
        precio: 45.50,
        tamaños: [
            {
                nombre: 'chico',
                mililitros: 300
            },
            {
                nombre: 'grande',
                mililitros: 800
            }
        ]
    },
    /* 5 */
    {
        nombre: 'Helado',
        categoria: 'Postres',
        sabores: ['vainilla', 'chocolate']
    }
])

// Insertar en empleados
db.empleados.insertMany([
    /* 1 */
    {
        nombre: 'José',
        apellidos: 'Sánchez',
        salario: 80230,
        puesto: 'Gerente'
    },
    /* 2 */
    {
        nombre: 'Pedro',
        apellidos: 'Rodríguez',
        salario: 105200,
        puesto: 'Mesero',
        lenguajes: ['Español', 'Inglés']
    },
    /* 3 */
    {
        nombre: 'Mónica',
        apellidos: 'Ávila',
        salario: 185500,
        puesto: 'Hostess',
        deVacaciones: true,
        desde: new Date('2007-10-03')
    },
    /* 4 */
    {
        nombre: 'David',
        apellidos: 'Bravo',
        salario: 62000,
        puesto: 'Contador',
        premios: [
            { nombre: 'Mejor empleado', fecha: new Date('2017-02-01') },
            { nombre: 'Más honesto'}
        ]
    },
    /* 5 */
    {
        nombre: 'Oswaldo',
        apellidos: 'Paz',
        salario: 33000,
        puesto: 'Cocinero',
        hobbies: ['guitarra', 'poesía']
    }
])