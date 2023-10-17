import { describe, test, expect } from "@jest/globals";
import { ping } from "../solutions/ejercicio1.js";

describe("Test en el ejercicio 1", () => {
  test("debería retornar datos cuando el ping es exitoso", (done) => {
    const cb = (error, data) => {
      try {
        if (error) throw error;
        expect(data).toBeDefined();
        done();
      } catch (err) {
        done(err);
      }
    };

    ping("midu.dev", cb);
  });
});
