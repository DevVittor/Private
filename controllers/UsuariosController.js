import Users from "../models/Users.js"
class Usuarios{

    async index(req,res){
        const listUsers = await Users.findAll({
            where:{
                roles:"usuario"
            }
        });
        if(!listUsers) return res.status(404).json({msg:`Não tem nenhum usuário cadastrado no momento`});
        
        res.render("Usuarios",{ listUsers: listUsers });
    }
}

export default Usuarios;