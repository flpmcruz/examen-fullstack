import fs from "node:fs/promises";
import { describe, test, expect, beforeAll } from "@jest/globals";
import { procesarArchivo } from "../solutions/ejercicio3.js";

describe("Test en el ejercicio 3", () => {
  const content = "hola a todos";
  const path = "input.txt";

  beforeAll(() => {
    fs.writeFile(path, content, "utf8");
  });
  test("debería leer correctamente el archivo", async () => {
    let data = "";

    try {
      await procesarArchivo();
      data = await fs.readFile("output.txt", "utf8");
    } catch (error) {}

    expect(data).toBe(content.toUpperCase());
  });
});
