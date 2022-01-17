import express from "express";
import morgan from "morgan";
import cors from "cors";
import path from "path";
import routes from "./routes/noticia.routes";
import route from "./routes/categoria.routes";
import ruta from "./routes/login.routes"
import "./database";


// instanciar express
const app = express();


// crear un puerto
app.set("port", process.env.PORT || 4000);

app.listen(app.get("port"), () => {
  console.log("Estoy en el puerto " + app.get("port"));
  console.log(path.join(__dirname, "../public"));
});

//configuraciones extras midlewares
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// configurar el index.html
app.use(express.static(path.join(__dirname, "../public")));

//crear rutas
app.use("/apinoticias", routes, route, ruta);



