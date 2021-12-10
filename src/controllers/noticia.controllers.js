const noticiaCtrl = {};

noticiaCtrl.borrarNoticia = (req, res) => {
  res.send("alguien quiere borrar una noticia");
};

noticiaCtrl.nuevaNoticia = (req, res) => {
  res.send("alguien quiere agregar una noticia");
};

export default noticiaCtrl;