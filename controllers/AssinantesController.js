import Users from "../models/Users.js";
import Assinante from "../models/Assinante.js";
class Assinantes{

    async index(req,res){
        const assinantesLista = await Users.findAll({
            where:{
                roles:"assinante"
            }
        });
        if(!assinantesLista) return res.status(404).json({msg:`Não foi encontrado nenhum assinante`});
    
        res.render("Assinantes",{assinantesLista: assinantesLista});
    }

    async store(req,res){

        const user = 1;

        try {
            const checkUser = await Users.findOne({
                where:{
                    id:user
                }
            });
            if(!checkUser) return res.status(404).json({msg:`Não tem nenhum usuário com esse Id no sistema`});
            const existAssinante = await Assinante.findOne({
                where:{
                    userId:user
                }
            });
            if(existAssinante) return res.status(404).json({msg:`Você já é assinante`});
            const createAssinante = await Assinante.create({
                userId:user,
                assinante:true
            });
            
            await createAssinante.save()
            .then(() => {
                res.status(200).json({ msg: `O assinante foi criado` });
            })
            .catch((error) => {
                res.status(404).json({ msg: `Não foi possível criar a tabela assinante. ${error}` });
            });
        } catch (error) {
            res.status(404).json({msg:`Não foi possível resgatar nenhum dado. ${error}`});
        }

    }

}

export default Assinantes;