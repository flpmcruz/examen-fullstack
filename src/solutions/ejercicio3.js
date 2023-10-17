import fs from "fs";

export async function procesarArchivo() {
  const handleWrite = (error) => {
    if (error) return false;

    return true;
  };

  const handleRead = (error, contenido) => {
    if (error) return false;

    const textoProcesado = contenido.toUpperCase();
    fs.writeFile("output.txt", textoProcesado, handleWrite);
  };

  fs.readFile("input.txt", "utf8", handleRead);
}
