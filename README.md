# Food Store - Parcial Programación III

## Datos del alumno

**Alumno:** Enrique Alejandro Juárez Álvarez  
**Materia:** Programación III  
**Evaluación:** Primer Parcial  
**Proyecto:** Food Store  

---

## Descripción del proyecto

Food Store es una aplicación web frontend desarrollada como parte del primer parcial de Programación III.

El proyecto consiste en una tienda de comida rápida donde el usuario puede visualizar un catálogo de productos, buscar productos por nombre, filtrar por categoría y agregar productos a un carrito de compras. El carrito mantiene la información utilizando `localStorage`, por lo que los productos agregados no se pierden al recargar la página.

La aplicación fue desarrollada respetando el enfoque solicitado para la evaluación: uso de **HTML, CSS, JavaScript y TypeScript**, sin backend, sin base de datos y sin frameworks frontend.

---

## Objetivo del proyecto

El objetivo principal del proyecto es aplicar los contenidos trabajados en las primeras unidades de la materia, especialmente:

- Estructura HTML.
- Estilos con CSS.
- Manipulación del DOM.
- Eventos en JavaScript.
- Uso de TypeScript.
- Manejo de arrays.
- Persistencia básica con `localStorage`.
- Organización del código en módulos y archivos separados.

---

## Funcionalidades implementadas

### Catálogo de productos

La aplicación muestra un catálogo dinámico con distintos productos de comida rápida.

Cada producto contiene:

- Identificador.
- Nombre.
- Precio.
- Categoría.
- Imagen.

Los productos no están escritos directamente en el HTML, sino que se cargan desde el archivo `data.ts`.

---

### Búsqueda de productos

El catálogo incluye un campo de búsqueda que permite encontrar productos por nombre.

La búsqueda se realiza de forma dinámica. A medida que el usuario escribe, se actualiza el listado de productos visibles.

Ejemplos de búsqueda:

- Hamburguesa
- Pizza
- Coca Cola
- Sprite
- Helado

Si no se encuentra ningún producto, la aplicación muestra un mensaje indicando que no hay coincidencias.

---

### Filtrado por categoría

La aplicación permite filtrar productos por categoría desde un menú lateral.

Categorías incluidas:

- Todas
- Hamburguesas
- Pizzas
- Acompañamientos
- Bebidas
- Postres

La opción **Todas** permite volver a mostrar el catálogo completo.

---

### Carrito de compras

Cada producto tiene un botón para ser agregado al carrito.

Cuando el usuario agrega un producto:

- Se guarda en `localStorage`.
- Si el producto no existía en el carrito, se agrega con cantidad 1.
- Si el producto ya existía, se incrementa su cantidad.
- Se actualiza el contador visual del carrito.

---

### Contador del carrito

En la barra de navegación se muestra un contador de productos agregados.

Ejemplo:

```txt
Carrito (0)
Carrito (1)
Carrito (2)