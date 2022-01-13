import mongoose, {Schema} from 'mongoose';

const userSchema = new Schema({
    nombreUsuario:{
        required: true,
        type: String,
        maxlength: 30,
    },
    usuarioEmail:{
        unique: true,
        required: true,
        type: String,
        maxlength: 30,
    },
    password:{
        required: true,
        type: String,
        maxlength: 70,
    }
})

const User = mongoose.model('user', userSchema);

export default User;