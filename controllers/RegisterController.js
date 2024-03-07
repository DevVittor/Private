import Users from "../models/Users.js";
import bcrypt from "bcrypt";

class Register{

    async index(req,res){
        res.render("Register");
    }

    async store(req,res){

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
    }

}

export default Register;