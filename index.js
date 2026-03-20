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
//agregarProducto("Mouse",12000);

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