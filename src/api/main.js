import { Server } from "./server.js";
import { AppRoutes } from "./routes.js";
import { config } from "../solutions/dotenv.js";

config("src/config/config.env");
/*  */
(() => main())();

function main() {
  const server = new Server(AppRoutes.routes());
  server.config();
  server.app.listen(process.env.PORT, () => {
    console.log(`Server on port ${process.env.PORT}`);
  });
}
