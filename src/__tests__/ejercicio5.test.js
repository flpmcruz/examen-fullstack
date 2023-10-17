import { describe, test, expect } from "@jest/globals";
import { delay } from "../solutions/ejercicio5.js";

describe("Test en el ejercicio 5", () => {
  test("debería resolver la promesa despues de n ms", (done) => {
    const delayTime = 3000;
    const startTime = Date.now();

    delay(delayTime).then(() => {
      const endTime = Date.now();
      const timeDiff = endTime - startTime;
      expect(timeDiff).toBeGreaterThanOrEqual(delayTime);
      done();
    });
  });
});
