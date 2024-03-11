import { DataTypes } from "sequelize";
import conn from "../database/conn.js";

const Users  = conn.define("users",{
    nome:{
        type:DataTypes.STRING(150),
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    },
    roles:{
        type:DataTypes.STRING,
        allowNull:false,
        defaultValue:"usuario"
    }
});

Users.sync()
.then(()=>{
    console.log(`A tabela users foi criada com sucesso!`);
}).catch((error)=>{
    console.log(`Deu um error quando tentei criar a tabela users. ${error}`);
});

export default Users;