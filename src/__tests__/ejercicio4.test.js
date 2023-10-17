import fs from "node:fs/promises";
import { describe, test, expect, beforeAll } from "@jest/globals";
import { leerArchivos } from "../solutions/ejercicio4.js";

describe("Test en el ejercicio 4", () => {
  const content1 = "hola1";
  const content2 = "hola2";
  const content3 = "hola3";
  beforeAll(async () => {
    await Promise.all([
      fs.writeFile("archivo1.txt", content1, "utf8"),
      fs.writeFile("archivo2.txt", content2, "utf8"),
      fs.writeFile("archivo3.txt", content3, "utf8"),
    ]);
  });

  test("debería leer correctamente los archivos y devolverlos en cadena", async () => {
    let data;
    try {
      data = await leerArchivos();
    } catch (error) {}

    expect(data).toBe(`${content1} ${content2} ${content3}`);
  });
});
