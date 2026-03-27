// Manejo de archivos JSON (simple)
import fs from "fs";
import dayjs from "dayjs";

const texto = fs.readFileSync("productos.json", "utf8");
const productos = JSON.parse(texto);
for (const p of productos) {
  console.log(p);
}

//2. Agregar datos a un archivo
function agregarProducto(nombre, precio)
{
    const texto = fs.readFileSync("productos.json", "utf8");
    const productos = JSON.parse(texto);
    const nuevoProducto = { id: productos.length + 1, nombre, precio };
    productos.push(nuevoProducto);

    fs.writeFileSync("productos.json", JSON.stringify(productos, null, 2), "utf8");
    console.log("Guardado con exito");
}
agregarProducto("Mouse",12000);

//3. Uso de librerias externas

function mostrarFechaHora() {
  const ahora = new Date();

  const fechaActual = ahora.toLocaleDateString();
  const horaActual = ahora.toLocaleTimeString();
  const fechaFormateada = dayjs().format("DD/MM/YYYY");

  console.log("Fecha actual:", fechaActual);
  console.log("Hora actual:", horaActual);
  console.log("Fecha formateada:", fechaFormateada);
}

mostrarFechaHora();
//Async es para esperar cosas (como el internet)
async function obtenerPais(nombre) {
  const url = `https://restcountries.com/v3.1/name/${encodeURIComponent(
    nombre
  )}`;
  
//await espera respuesta para que fetch la consiga y que se convierta a json
  const data = await (await fetch(url)).json();
  const pais = data[0];
  

  console.log("País:", pais.name.common);
  console.log("Capital:", pais.capital?.[0] || "N/A");
  console.log("Región:", pais.region || "N/A");
  console.log("Población:", pais.population);
}
//push prueba ivo
obtenerPais("Argentina");
 //Ejercicio 5 Buscador de productos
// Esta función busca un producto por nombre en el archivo productos.json
function buscarProducto(nombre) {
  // Leemos el archivo productos.json como texto
  const texto = fs.readFileSync("productos.json", "utf8");
  // Convertimos el texto a un array de productos (un array de objetos)
  const productos = JSON.parse(texto);

  // Buscamos el producto cuyo nombre coincida (ignora mayúsculas/minúsculas)
  // find() devuelve el primer elemento que cumpla la condición
  const producto = productos.find(
    (p) => p.nombre.toLowerCase() === nombre.toLowerCase()
  );

  // Si se encontró el producto, mostramos la información. Si no, mostramos que no se encontró.
  if (producto) {
    console.log("Producto encontrado");
    console.log("Nombre:", producto.nombre);
    console.log("Precio:", producto.precio);
  } else {
    console.log("Producto no encontrado");
  }
}

// Ejemplo para probar la función:
buscarProducto("Mouse");

//Ejercicio 6  Generador de archivo CSV
// Esta función genera un archivo CSV a partir del archivo productos.json
function generarCSV() {
  // Leemos el archivo productos.json como texto
  const texto = fs.readFileSync("productos.json", "utf8");
  // Convertimos el texto a un array de productos (un array de objetos)
  const productos = JSON.parse(texto);

  // Comenzamos el CSV con los encabezados
  let csv = "nombre,precio\n";

  // Por cada producto, agregamos una línea al CSV
  productos.forEach((producto) => {
    // Agregamos el nombre y el precio separados por coma
    csv += `${producto.nombre},${producto.precio}\n`;
  });

  // Escribimos el archivo productos.csv con el contenido generado
  fs.writeFileSync("productos.csv", csv, "utf8");

  // Mostramos mensaje de éxito
  console.log("Archivo productos.csv generado con éxito.");
}

// Ejemplo para probar la función:
generarCSV();

//Ejercicio 7  Temporizador programado
