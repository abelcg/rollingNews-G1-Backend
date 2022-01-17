import { Router } from "express";
import loginCtrl from "../controllers/login.controllers";
import userCtrl from "../controllers/user.controllers";
import verificarJWT from "../middleware/verificarJWT";
//instancia de router para crear las rutas
const ruta = Router();

// creo las rutas

ruta.route("/login").post(loginCtrl.login);

ruta.route("/registro").post(userCtrl.nuevoUser);

ruta.route("/isUserAuth").get(verificarJWT, loginCtrl.adminBoard);

export default ruta;
