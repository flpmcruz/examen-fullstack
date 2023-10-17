import fs from "node:fs/promises";
import { describe, test, expect } from "@jest/globals";
import { config } from "../solutions/dotenv.js";

describe("debe inyectar las variables del .env al process.env", () => {
  test("debe inyectar las variables del .env en la raiz", async () => {
    let KEY = "PUERTO";
    const VALUE = "987654321";
    await fs.writeFile(".env", `${KEY}=${VALUE}`);
    config();
    expect(process.env[KEY]).toBe(VALUE);
  });
  test("debe inyectar las variables del .env que se le pase", async () => {
    let KEY = "PASSWORD";
    const VALUE = "qwerty";
    await fs.writeFile("src/config/.env", `${KEY}=${VALUE}`);
    config("src/config/.env");
    expect(process.env[KEY]).toBe(VALUE);
  });
});
