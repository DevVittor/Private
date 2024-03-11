import Posts from "../models/Posts.js";
class Home{

    async index(req,res){
        const viewPost = await  Posts.findAll();

        if(!viewPost) return res.status(404).json({msg:`Não foi possível encontrar nenhum post`});

        res.render("Home",{viewPost: viewPost});
    }

}

export default Home;