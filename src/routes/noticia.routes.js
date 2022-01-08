import { Router } from "express";
import noticiaCtrl from "../controllers/noticia.controllers";

//instancia de router para crear las rutas
const routes = Router();

// creo las rutas

routes
  .route("/noticias/")
  .delete(noticiaCtrl.listaNoticias)
  .post(noticiaCtrl.nuevaNoticia);

routes
  .route("/noticias/:id")
  .get(noticiaCtrl.obtenerNoticia)
  .delete(noticiaCtrl.borrarNoticia)
  .put(noticiaCtrl.modificarNoticia);

export default routes;
