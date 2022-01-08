import Noticia from "../models/noticia";
import {
  campoRequerido,
  validarFecha,
  validarRichText,
  validarURL,
} from "../controllers/helpers";

const noticiaCtrl = {};
/* 
noticiaCtrl.borrarNoticia = (req, res) => {
  res.send("alguien quiere borrar una noticia");
};

noticiaCtrl.nuevaNoticia = (req, res) => {
  res.send("alguien quiere agregar una noticia");
};
 */


noticiaCtrl.nuevaNoticia = async(req, res)=> {
  try {
    console.log(req.body);
    //validar
    if (
      campoRequerido(req.body.titulo) &&
      validarURL(req.body.imagen) &&
      campoRequerido(req.body.descripcion) &&
      validarRichText(req.body.contenido) &&
      campoRequerido(req.body.autor) &&
      campoRequerido(req.body.categoria) &&
      validarFecha(req.body.fecha)
    ) {
    //crear un objeto para guardar en la BD
    const noticiaNueva = new Noticia({
      titulo: req.body.titulo,
      imagen: req.body.imagen,
      descripcion: req.body.descripcion,
      contenido: req.body.contenido,
      autor: req.body.autor,
      categoria: req.body.categoria,
      fecha: req.body.fecha
    })
    console.log(noticiaNueva);
    //guardar BD
    await noticiaNueva.save();
    res.status(201).json({mensaje: 'Noticia creada correctamente'});
  }
  } catch (error) {
    console.log(error);
    res.status(400).json({mensaje: 'Error al crear Noticia'});
  }
    res.send('alguien quiere agregar Noticia')
};  

noticiaCtrl.listaNoticias = async(req,res)=>{
  try {
    //crear un arreglo con las noticias de la BD
    const listaNoticias = await Noticia.find();
    res.status(200).json(listaNoticias);
  } catch (error) {
    console.log(error);
    res.status(404).json({mensaje: 'Error al buscar las noticias solicitadas'});
  }
}

noticiaCtrl.obtenerNoticia = async (req, res) => {
  try {
    //buscar un objeto  en la BD
    //console.log(req.params.id)
    const NoticiaBuscada = await Noticia.findById(req.params.id);
    res.status(200).json(NoticiaBuscada);
  } catch (error) {
    console.log(error);
    res.status(404).json({mensaje: 'Error al buscar la noticia solicitada'})
}
}

noticiaCtrl.borrarNoticia = async (req, res) => {
  try {
    //buscar y borrar el Noticia mediante su id
    await Noticia.findByIdAndDelete(req.params.id);
    res.status(200).json({mensaje: 'se pudo eliminar la noticia solicitada'});
  } catch (error) {
    console.log(error);
    res.status(404).json({mensaje: 'Error al buscar la noticia solicitada'})
  }
}
noticiaCtrl.modificarNoticia = async (req, res) => {
  try {
    //busque un Noticia por su id y lo modifique con los datos del body
    await Noticia.findByIdAndUpdate(req.params.id,req.body);
    res.status(200).json({mensaje: 'la noticia fue modificada'});
  } catch (error) {
    console.log(error);
    res.status(404).json({mensaje: 'Error al buscar la noticia solicitada'})
  }
}

export default noticiaCtrl;