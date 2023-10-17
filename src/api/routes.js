import { Router } from "express";
import { AppController } from "./controller.js";

export class AppRoutes {
  static routes = () => {
    const router = new Router();

    router.get("/", AppController.getUsers);
    router.get("/:id", AppController.getUser);
    router.post("/", AppController.createUser);
    router.put("/:id", AppController.updateUser);
    router.delete("/:id", AppController.deleteUser);

    return router;
  };
}
