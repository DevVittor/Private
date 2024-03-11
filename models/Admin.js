import { DataTypes } from "sequelize";
import conn from "../database/conn.js";

const Admin = conn.define("Admin",{
    nome:{
        type:DataTypes.STRING(150),
        allowNull:false
    },
    email:{
        type:DataTypes.STRING(150),
        allowNull:false,
        defaultValue:"1@gmail.com"
    },
    password:{
        type:DataTypes.STRING(150),
        allowNull:false,
        defaultValue:"1234567"
    },
    roles:{
        type:DataTypes.STRING,
        allowNull:false,
        defaultValue:"admin"
    }
});

Admin.sync()
.then(()=>{
    console.log(`A coluna Admin foi criada com sucesso!`);
}).catch((error)=>{
    console.log(`Deu um error ${error} na hora de criar a coluna Admin`);
});

export default Admin;