// Manejo de archivos JSON
import fs from "fs";

const texto = fs.readFileSync("productos.json", "utf8");
const productos = JSON.parse(texto);
for (const p of productos) {
  console.log(p);
}