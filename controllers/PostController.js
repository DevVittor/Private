import Posts from "../models/Posts.js";
class Post{

    async index(req,res){
        res.render("Post");
    }

    async store(req,res){
        const {title,foto,video} = req.body;

        try {
            if(!title) return res.status(404).json({msg:`Preencha o campo title`});

            const createPost = await Posts.create({
                title,
                foto,
                video
            });
            
            createPost.save()
            .then(()=>{
                res.status(201).json({msg:`O post foi criado`});
            }).catch((error)=>{
                res.status(404).json({msg:`Não foi possível criar o post. ${error}`});
            });
        } catch (error) {
            res.status(404).json({msg:`Não foi possível achar nada. ${error}`});
        }
        
    }

    async put(req,res){
        //
    }

    async delete(req,res){
        //
    }

}

export default Post;