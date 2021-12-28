import mongoose, {Schema} from 'mongoose';

const noticiaSchema = new Schema({
    titulo:{
        required: true,
        type: String,
        maxlength: 150
    },
    imagen:{
        required: true,
        type: String
    },
    descripcion:{
        required: true,
        type: String,
        maxlength: 200
    },
    contenido:{
        required: true,
        type: String
    },
    autor:{
        required: true,
        type: String
    },
    categoria:{
        required: true,
        type: String
    },
    fecha:{
        required: true,
        type: String
    }
})

const Noticia = mongoose.model('noticia', noticiaSchema);

export default Noticia;