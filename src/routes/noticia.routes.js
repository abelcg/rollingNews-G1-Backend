import { Router } from "express";
import noticiaCtrl from "../controllers/noticia.controllers";

//instancia de router para crear las rutas
const routes = Router();

// creo las rutas

routes
  .route("/")
  .delete(noticiaCtrl.borrarNoticia)
  .post(noticiaCtrl.nuevaNoticia);

  export default routes;