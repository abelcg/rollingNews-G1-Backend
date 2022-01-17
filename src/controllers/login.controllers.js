const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
import User from "../models/user";
import token_secret from "../config/token";
import { validarEmail } from "../controllers/helpers";

const loginCtrl = {};
loginCtrl.login = async (req, res) => {
  //validar
  if (!req.body.usuarioEmail || !req.body.password) {
    return res.status(400).json({ mensaje: "Debe llenar todos los campos." });
  }
  if (validarEmail(req.body.usuarioEmail)) {
  const user = await User.findOne({ usuarioEmail: req.body.usuarioEmail });
  if (!user) {
    res
      .status(400)
      .send({ mensaje: "Error! no existe usuario registrado con este email!" });
    return;
  }
  try {
    const match = await bcrypt.compare(req.body.password, user.password);
    const accessToken = jwt.sign({user}, token_secret, { expiresIn: '1h' });

    if (match) {
      res.status(200).json({
        mensaje: "Autentificación exitosa",
        accessToken: accessToken,
        user: user,
      });
    } else {
      res.status(404).json({ mensaje: "Error: credenciales incorrectas" });
    }
  } catch (error) {
    console.error(error);
  }
} else { res.status(404).json({ mensaje: "Error: debe ingresar un email valido" }) }
};

loginCtrl.adminBoard = (req, res) => {
  res.status(200).send({ auth: true, mensaje: "Contenido de Admnin"});
};

export default loginCtrl;
