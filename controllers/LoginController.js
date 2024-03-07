import Users from "../models/Users.js";
import bcrypt from "bcrypt";

class Login{

    async index(req,res){
        res.render("Login");
    }

    async store(req,res){

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
    }

}

export default Login;