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

function buscarProducto(nombre) {
 
  const texto = fs.readFileSync("productos.json", "utf8");

  const productos = JSON.parse(texto);

  
  const producto = productos.find(
    (p) => p.nombre.toLowerCase() === nombre.toLowerCase()
  );


  if (producto) {
    console.log("Producto encontrado");
    console.log("Nombre:", producto.nombre);
    console.log("Precio:", producto.precio);
  } else {
    console.log("Producto no encontrado");
  }
}


buscarProducto("Mouse");

//Ejercicio 6  Generador de archivo CSV
// Esta función genera un archivo CSV a partir del archivo productos.json
function generarCSV() {
  
  const texto = fs.readFileSync("productos.json", "utf8");
  const productos = JSON.parse(texto);
  // Comenzamos el CSV 
  let csv = "nombre,precio\n";

  productos.forEach((producto) => {
    csv += `${producto.nombre},${producto.precio}\n`;
  });

  fs.writeFileSync("productos.csv", csv, "utf8");
  console.log("Archivo productos.csv generado con éxito.");
}
generarCSV();

//Ejercicio 7  Temporizador programado
function contador() {
  let numero = 1; 

  const intervalo = setInterval(() => {
    console.log(numero); 

    if (numero === 10) {
      clearInterval(intervalo); 

      setTimeout(() => {
        console.log("Fin del contador");
      }, 500); 
    }

    numero++; 
  }, 1000); 
}

contador();

//Ejercicio 8 Analizador de texto
function analizarTexto(texto) {

  const caracteres = texto.length;
  const palabras = texto.trim().split(/\s+/).filter(Boolean).length;

  let vocales = 0;
  let consonantes = 0;
  const vocalesRegex = /[aeiouáéíóúüAEIOUÁÉÍÓÚÜ]/;
  const letrasRegex = /[a-zA-ZáéíóúüÁÉÍÓÚÜ]/;

  for (let i = 0; i < texto.length; i++) {
    const char = texto[i];
    if (letrasRegex.test(char)) {
      if (vocalesRegex.test(char)) {
        vocales++;
      } else {
        consonantes++;
      }
    }
  }

  return {
    caracteres: caracteres,
    palabras: palabras,
    vocales: vocales,
    consonantes: consonantes
  };
}

console.log(analizarTexto("Hola mundo"));

//Ejercicio 9 Validador de contraseña
function validarPassword(password) {
  const tieneLongitud = password.length >= 8;
  const tieneNumero = /\d/.test(password);
  const tieneMayuscula = /[A-ZÁÉÍÓÚÜ]/.test(password);

  if (tieneLongitud && tieneNumero && tieneMayuscula) {
    console.log("Password válida");
    return true;
  } else {
    console.log("Password inválida");
    return false;
  }
}

// Ejemplo para probar la función:
validarPassword("Hola1234"); // válida
validarPassword("holamundo"); // inválida
validarPassword("HOLAMUNDO"); // inválida
validarPassword("hola123456"); // inválida
validarPassword("Hola123"); // inválida