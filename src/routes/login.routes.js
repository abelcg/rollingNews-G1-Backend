import { Router } from "express";
import loginCtrl from "../controllers/login.controllers";
import userCtrl from "../controllers/user.controllers";

//instancia de router para crear las rutas
const ruta = Router();

// creo las rutas

ruta.route("/login").post(loginCtrl.login);

ruta.route("/registro").post(userCtrl.nuevoUser);

export default ruta;
