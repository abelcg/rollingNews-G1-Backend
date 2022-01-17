import User from "../models/user";
import { validarEmail } from "../controllers/helpers";
const bcrypt = require("bcryptjs");


const userCtrl = {};

userCtrl.nuevoUser = async (req, res) => {
  try {
    //validar
    if (
      !req.body.usuarioEmail ||
      !req.body.password ||
      !req.body.passwordCheck
    ) {
      return res.status(400).json({ mensaje: "Debe llenar todos los campos." });
    }
    if (req.body.password.length < 5) {
      return res.status(400).json({
        mensaje: "El password debe tener al menos 5 caracteres de largo.",
      });
    }
    if (req.body.password !== req.body.passwordCheck) {
      return res
        .status(400)
        .json({ mensaje: "Reingrese el mismo password para verificación." });
    }

    const userExistente = await User.findOne({
      usuarioEmail: req.body.usuarioEmail,
    });
    if (userExistente) {
      return res
        .status(400)
        .json({ mensaje: "La cuenta con este email ya existe." });
    }
    if (validarEmail(req.body.usuarioEmail)) {
      // crear un hash del password del ussuario antes de guardar en BD
      const password = req.body.password;
      let passwordHash = await bcrypt.hash(password, 10);
      //crear un objeto para guardar en la BD
      const nuevoUsuario = new User({
        nombreUsuario: req.body.nombreUsuario,
        usuarioEmail: req.body.usuarioEmail,
        password: passwordHash,
      });
      // console.log(nuevoUsuario);
      //guardar BD
      await nuevoUsuario.save();
      res.status(201).json({
        mensaje: "Usuario creada correctamente",
      });
    } else {
      res.status(404).json({ mensaje: "Error: debe ingresar un email valido" });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ mensaje: "Error al crear Usuario" });
  }
};

export default userCtrl;
