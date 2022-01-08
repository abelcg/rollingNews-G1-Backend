import mongoose, {Schema} from 'mongoose';

const categoriaSchema = new Schema({
    nombre:{
        required: true,
        type: String,
        maxlength: 30,
        unique: true
    },
    descripcion:{
        type: String,
        maxlength: 80
    }
});

const Categoria = mongoose.model('categoria', categoriaSchema);

export default Categoria;