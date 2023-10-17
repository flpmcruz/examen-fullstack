import fs from "node:fs/promises";

export const leerArchivos = async () => {
  const [archivo1, archivo2, archivo3] = await Promise.all([
    fs.readFile("archivo1.txt", "utf8"),
    fs.readFile("archivo2.txt", "utf8"),
    fs.readFile("archivo3.txt", "utf8"),
  ]).catch(console.log);
  return `${archivo1} ${archivo2} ${archivo3}`;
};
