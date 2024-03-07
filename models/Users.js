import Sequelize from "sequelize";
import conn from "../database/conn.js";

const Users  = conn.define("users",{
    email:{
        type:Sequelize.STRING,
        allowNull:false
    },
    password:{
        type:Sequelize.STRING,
        allowNull:false
    }
});

Users.sync()
.then(()=>{
    console.log(`A tabela users foi criada com sucesso!`);
}).catch((error)=>{
    console.log(`Deu um error quando tentei criar a tabela users. ${error}`);
});

export default Users;