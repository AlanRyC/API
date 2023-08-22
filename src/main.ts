import bodyParser from "body-parser";
import express from "express";
const cors = require("cors");
import { config } from "./config";
import { routes } from "./Producto/infrastructure/RouteUser";
import "dotenv/config";
import { rateLimit } from "express-rate-limit";


const app = express();

const accountLimiter = rateLimit({
  windowMs: 10 * 60 * 1000, 
  max: 10, 
  message: "Demasiados intentos, por favor espera 10 minutos.",
});

app.use(cors());
app.use(bodyParser.json());
app.use("/Users",accountLimiter, routes);

const { port } = config.server;

app.listen(port, () => {
  console.log(`[APP] - corriendo puerto ${port}`);
});