import express from "express"


import {productosController} from "./Dependencias";
export const routes = express.Router();
routes.post('/', productosController.create.bind(productosController));
routes.get('/', productosController.getUser.bind(productosController))
routes.get('/:Correo', productosController.getProductoid.bind(productosController))
routes.delete('/:Correo', productosController.deleteById.bind(productosController))
routes.put('/', productosController.put.bind(productosController))