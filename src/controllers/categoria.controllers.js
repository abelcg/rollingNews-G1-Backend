import Categoria from "../models/categoria";
import { campoRequerido } from "../controllers/helpers";

const categoriaCtrl = {};

categoriaCtrl.nuevaCategoria = async (req, res) => {
  try {
    console.log(req.body);
    //validar
    if (campoRequerido(req.body.nombre)) {
      //crear un objeto para guardar en la BD
      const categoriaNueva = new Categoria({
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
      });
      //console.log(categoriaNueva);
      //guardar BD
      await categoriaNueva.save();
      res.status(201).json({ mensaje: "Categoria creada correctamente" });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ mensaje: "Error al crear categoria" });
  }
  res.send("alguien quiere agregar una categoria");
};

categoriaCtrl.listaCategorias = async (req, res) => {
  try {
    //crear un arreglo con las Categorias de la BD
    const listaCategorias = await Categoria.find();
    res.status(200).json(listaCategorias);
  } catch (error) {
    console.log(error);
    res
      .status(404)
      .json({ mensaje: "Error al buscar las categorias solicitadas" });
  }
};

categoriaCtrl.obtenerCategoria = async (req, res) => {
  try {
    //buscar un objeto  en la BD
    //console.log(req.params.id)
    const categoriaBuscada = await Categoria.findById(req.params.id);
    res.status(200).json(categoriaBuscada);
  } catch (error) {
    console.log(error);
    res
      .status(404)
      .json({ mensaje: "Error al buscar la categoria solicitada" });
  }
};

categoriaCtrl.borrarCategoria = async (req, res) => {
  try {
    //buscar y borrar el Categoria mediante su id
    await Categoria.findByIdAndDelete(req.params.id);
    res
      .status(200)
      .json({ mensaje: "se pudo eliminar la categoria solicitada" });
  } catch (error) {
    console.log(error);
    res
      .status(404)
      .json({ mensaje: "Error al buscar la categoria solicitada" });
  }
};
categoriaCtrl.modificarCategoria = async (req, res) => {
  try {
    //busque una categoria por su id y la modifique con los datos del body
    await Categoria.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({ mensaje: "la categoria fue modificada" });
  } catch (error) {
    console.log(error);
    res
      .status(404)
      .json({ mensaje: "Error al buscar la categoria solicitada" });
  }
};

categoriaCtrl.categoriasNav = async (req, res) => {
  
   const start = req.query._start;
   const end = req.query._end;

  console.log(start);
  console.log(end);

   try {
    //crear un arreglo con las Categorias de la BD
    const categorias = await Categoria.find();
    const categoriasNav = categorias.slice(start,end);
    console.log(categoriasNav);
    res.status(200).json(categoriasNav);
  } catch (error) {
    console.log(error);
    res
      .status(404)
      .json({ mensaje: "Error al buscar las categorias solicitadas" });
  } 
};

export default categoriaCtrl;
