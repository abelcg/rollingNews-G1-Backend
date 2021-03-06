import { Router } from "express";
import categoriaCtrl from "../controllers/categoria.controllers";

//instancia de router para crear las rutas
const route = Router();

// creo las rutas

route
  .route("/categoria/")
  .get(categoriaCtrl.categoriasNav);

route
  .route("/categorias/")
  .get(categoriaCtrl.listaCategorias)
  .post(categoriaCtrl.nuevaCategoria);

route
  .route("/categorias/:id")
  .get(categoriaCtrl.obtenerCategoria)
  .delete(categoriaCtrl.borrarCategoria)
  .put(categoriaCtrl.modificarCategoria);

export default route;
