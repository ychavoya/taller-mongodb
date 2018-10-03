
# Ejercicios

## 1 - Crear y eliminar

- Crear una base de datos cualquiera
- Crear dos colecciones cualesquiera
- Mostrar las bases de datos
- Eliminar una colección
- Eliminar la base de datos creada

## 2 - Restaurante

- Crear base de datos restaurante
- Crear colecciones platillos y empleados
- Insertar 5 documentos en cada colección.
    - Cada colección en platillos debe tener por lo menos un campo para nombre, uno para categoria y uno para precio.
    - Cada colección en empleados debe tener por lo menos un campo para nombre, uno para apellidos, uno para puesto y uno para salario.
    - Practicar la creación de campos con los tipos de datos vistos.
    - Practicar la creación de documentos con campos diferentes entre sí.

## 3 - Papelería

- Cargar los documentos del material ['01-papeleria.js'](../materiales/01-papeleria.js)
- Mostrar todos los documentos de inventario
    - Con estado igual a D.
    - Con estado igual a A o igual a D. 
    - Con cantidad menor a 60 y estado igual a A.
    - Donde el campo colores no exista, o donde cantidad sea ≥ 75.
    - Donde colores exista y no sea de tipo array.
    - Con exactamente 3 elementos en colores.

## 4 - Papelería parte 2

- Cargar los documentos del material ['01-papeleria.js'](../materiales/01-papeleria.js)
    - Duplicar la cantidad de todos los documentos con cantidad ≤ 50.
    - Renombrar tamaño como medidas en todos los documentos.
    - Reemplazar el primer documento con estado D por un objeto vacío.
    - Actualizar el primer documento que tenga un arreglo en colores y agregarle "gris" a éste.
    - Eliminar todos los documentos con estado igual a F.