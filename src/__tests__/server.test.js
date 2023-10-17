import request from "supertest";
import { Server } from "../api/server.js";
import { AppRoutes } from "../api/routes.js";

describe("test for app", () => {
  let serverListen = null;
  let server = null;
  let app = null;
  let api = null;

  beforeAll(async () => {
    // Setup express app
    server = new Server(AppRoutes.routes());
    server.config();
    serverListen = server.app.listen(9000);
    app = server.app;
    // Setup supertest
    api = request(app);
  });

  test("GET USERS /", async () => {
    const response = await api.get("/");
    expect(response).toBeTruthy();
    expect(response.statusCode).toBe(200);
    expect(response.headers["content-type"]).toMatch(/json/);
    expect(response.body).toEqual([{ id: 1, content: "Item 1" }]);
  });
  test("GET USER BY ID /", async () => {
    const response = await api.get("/1");
    expect(response).toBeTruthy();
    expect(response.statusCode).toBe(200);
    expect(response.headers["content-type"]).toMatch(/json/);
    expect(response.body).toEqual({ user: { id: 1, content: "Item 1" } });
  });
  test("GET USER WITH INVALID ID /", async () => {
    const response = await api.get("/56");
    expect(response).toBeTruthy();
    expect(response.statusCode).toBe(404);
    expect(response.headers["content-type"]).toMatch(/json/);
    expect(response.body).toEqual({ message: "User not found" });
  });
  test("POST USER /", async () => {
    const usersBefore = await api.get("/");
    const response = await api.post("/").send({ content: "Item 2" });
    const usersAfter = await api.get("/");

    expect(response).toBeTruthy();
    expect(response.statusCode).toBe(201);
    expect(response.headers["content-type"]).toMatch(/json/);
    expect(usersAfter.body.length).toBe(usersBefore.body.length + 1);
  });
  test("PUT USER /", async () => {
    const response = await api.put("/1").send({ content: "Item 2" });
    const user = await api.get("/1");

    expect(response).toBeTruthy();
    expect(response.statusCode).toBe(200);
    expect(response.headers["content-type"]).toMatch(/json/);
    expect(user.body).toEqual({ user: { id: 1, content: "Item 2" } });
  });
  test("DELETE USER /", async () => {
    const response = await api.delete("/1");
    expect(response).toBeTruthy();
    expect(response.statusCode).toBe(200);
  });

  afterAll(async () => {
    await serverListen.close();
  });
});
