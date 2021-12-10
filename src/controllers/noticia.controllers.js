const noticiaCtrl = {};

noticiaCtrl.nuevaNoticia = (req, res) => {
  res.send("alguien quiere agregar una noticia");
};
noticiaCtrl.borrarNoticia = (req, res) => {
  res.send("alguien quiere borrar una noticia");
};

export default noticiaCtrl;