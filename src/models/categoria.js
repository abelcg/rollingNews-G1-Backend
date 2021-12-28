import mongoose, {Mongoose, Schema} from 'mongoose';

const categoriaSchema = new Schema({
    nombre:{
        required: true,
        type: String,
        maxlength: 50
    },
    descripcion:{
        type: String,
        maxlength: 100
    }
});

const Categoria = mongoose.model('categoria', categoriaSchema);

export default Categoria;