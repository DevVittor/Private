import Users from "../models/Users.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const secret = process.env.JWT_SECRET;

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
            // Credenciais válidas, gerar token JWT
            const token = jwt.sign({ userId: checkUser.id }, secret, { expiresIn: '1h' });
            res.status(200).json({msg:`Login feito com sucesso!`,token:`${token}`});

        } catch (error) {
            res.status(404).json({msg:`Não foi encontrado nada. ${error}`});
            console.log(`Não foi encontrado nada. ${error}`);
        }
    }

    async put(req,res){
        //
    }

    async delete(req,res){
        const userId = req.params.id;

        try {
            const existUser = await Users.findOne({
                where:{
                    id:userId 
                }
            })

            if(!existUser) return res.status(404).json({msg:`Não tem nenhum usuário com esse id: ${userId}`});

            await existUser.destroy();
            res.status(200).json({ msg: `Usuário com ID ${userId} excluído com sucesso` });
        } catch (error) {
            res.status(404).json({msg:`Não foi encontrado nenhum Id. ${error}`})
        }

    }

}

export default Login;