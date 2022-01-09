import mongoose, {Schema} from 'mongoose';

const noticiaSchema = new Schema({
    titulo:{
        required: true,
        type: String,
        maxlength: 100,
        unique: true
    },
    imagen:{
        required: true,
        type: String,
        maxlength: 200,
    },
    descripcion:{
        required: true,
        type: String,
        maxlength: 280
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