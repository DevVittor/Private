import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();
//import passport from 'passport';
import conn from "./database/conn.js";
import compression from "compression";

const port = process.env.PORT || 8080;
import http from "node:http";
//import session from "express-session";
import cookieParser from "cookie-parser";

const modoNode = process.env.NODE_ENV;
const createServe = http.createServer(app);
import router from "./routes/v1/index.js";
app.set("view engine", "ejs");
/*app.use(session({
    secret: "some secret",
    cookie:{maxAge:3000},
    saveUninitialized:false
}))*/
app.use(express.static("public"));  
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(compression());
app.use(cookieParser());
app.disable("x-powered-by");

/*function validadeCookie(req,res,next){
    const {cookies} = req;
    console.log(cookies);
    next();
}*/

if (process.env.NODE_ENV === 'development') {
    console.log("Configurações específicas para ambiente de desenvolvimento");
} else if (process.env.NODE_ENV === 'production') {
    console.log("Configurações específicas para ambiente de produção");
}

app.use((req, __, next) => {
    console.log(req.path, req.method);
    next();
});

app.use("/v1", router);

conn.authenticate()
.then(()=>{
    console.log(`Banco de dados sincronizado`)
}).then(()=>{
    createServe.listen(port,()=>{
        console.log(`Servidor rodando na porta ${port} em modo ${modoNode}`);
    });
}).catch((error)=>{
    console.log(`Não foi possível sincronizar. ${error}`);
});
