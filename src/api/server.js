import express from "express";

export class Server {
  constructor(routes) {
    this.app = express();
    this.routes = routes;
  }

  config() {
    // middlewares
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));

    // routes
    this.app.use("/", this.routes);
  }
}
