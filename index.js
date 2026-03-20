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