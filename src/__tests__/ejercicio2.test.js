import { describe, test, expect } from "@jest/globals";
import { obtenerDatosPromise } from "../solutions/ejercicio2.js";

describe("Test en el ejercicio 2", () => {
  test("debería retornar { data: 'datos importantes' }", async () => {
    const data = await obtenerDatosPromise();
    expect(data).toEqual({ data: "datos importantes" });
  });
});
