import mongoose from 'mongoose'

//const url = 'mongodb://localhost:27017/rollingnews';
const url = 'mongodb+srv://abelcordobag:R0llingnews*ñ2235@cluster0.xhjgg.mongodb.net/rollingnews';

mongoose.connect(url,{useNewUrlParser: true});

//guardar la conexion
const connection = mongoose.connection;

connection.once('open', () => {
    console.log('BD conectada')
});