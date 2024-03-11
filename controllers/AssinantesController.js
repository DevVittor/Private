import Users from "../models/Users.js";
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

}

export default Assinantes;