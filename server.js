import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import bcrypt from "bcrypt";
//import passport from 'passport';
import conn from "./database/conn.js";
import Users from "./models/Users.js";
import compression from "compression";

const port = process.env.PORT || 8080;
import http from "node:http";
//import session from "express-session";
import cookieParser from "cookie-parser";

const modoNode = process.env.NODE_ENV;
const createServe = http.createServer(app);

app.set("view engine", "ejs");
/*app.use(session({
    secret: "some secret",
    cookie:{maxAge:3000},
    saveUninitialized:false
}))*/
app.use(express.static("public"));  
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors());
app.use(compression());
app.use(cookieParser());
app.disable("x-powered-by");

function validadeCookie(req,res,next){
    const {cookies} = req;
    console.log(cookies);
    next();
}

if (process.env.NODE_ENV === 'development') {
    console.log("Configurações específicas para ambiente de desenvolvimento");
  } else if (process.env.NODE_ENV === 'production') {
    console.log("Configurações específicas para ambiente de produção");
  }

app.get("/",(req,res)=>{
    res.render("Home");
});

app.get("/signin",validadeCookie,(req,res)=>{
    
    res.status(200).cookie("session_id", "123456").json({msg:"Cookie Salvo"});
}); 

app.post("/register",async(req,res)=>{
    const {email,password} = req.body;

    try {
        if(!email) return res.status(404).json({msg:"Preencha o campo email"});
        if(!password) return res.status(404).json({msg:"Preencha o campo password"});

        const duplicateEmail = await Users.findOne({
            where:{
                email:email
            }
        });

        if(duplicateEmail) return res.status(404).json({msg:`O email ${email} já foi cadastrado!`});

        const salt = bcrypt.genSaltSync(16);
        const hash = bcrypt.hashSync(password,salt);

        const createUser = await Users.create({
            email,
            password:hash
        });

        await createUser.save()
        .then(()=>{
            res.status(201).json({msg:`Usuário criado com sucesso!`});
            console.log(`Usuário criado com sucesso!`);
        }).catch((error)=>{
            res.status(301).json({msg:`Não foi possível cadastrar o usuário. ${error}`});
            console.log(`Não foi possível cadastrar o usuário. ${error}`);
        })

    } catch (error) {
        res.status(404).json({msg:`Não chegou nenhum dado. ${error}`});
        console.log(`Não chegou nenhum dado. ${error}`);
    }

});

app.post("/login",async(req,res)=>{
    const {email,password} = req.body;

    try {
        
        const checkUser = await  Users.findOne({
            where:{
                email:email
            }
        });

        if(!checkUser) return res.status(404).json({msg:`Esse email ${email} não foi cadastrado!`});

        const checkPassword = await bcrypt.compareSync(password,checkUser.password);

        if(!checkPassword) return res.status(404).json({msg:`Essa senha ${password} não é válida!`});

        res.status(200).json({msg:`Login feito com sucesso!`});

    } catch (error) {
        res.status(404).json({msg:`Não foi encontrado nada. ${error}`});
        console.log(`Não foi encontrado nada. ${error}`);
    }

})

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
