import {DataTypes} from "sequelize";
import conn from "../database/conn.js";

const Posts = conn.define("posts",{
    title:{
        type:DataTypes.STRING(250),
        allowNull:false
    },
    foto:{
        type:DataTypes.STRING,
        allowNull:true
    },
    video:{
        type:DataTypes.STRING,
        allowNull:true
    }
});

Posts.sync()
.then(()=>{
    console.log(`A tabela Post foi criada com sucesso!`);
}).catch((error)=>{
    console.log(`Houve um error na hora de criar a tabela post. ${error}`);
});

export default Posts;