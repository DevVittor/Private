import {DataTypes} from "sequelize";
import conn from "../database/conn.js";

const Assinante = conn.define("assinantes",{
    foto:{
        type:DataTypes.STRING,
        allowNull:true
    },
    nome:{
        type:DataTypes.STRING(150),
        allowNull:false
    },
    sobrenome:{
        type:DataTypes.STRING(150),
        allowNull:false
    },
    nascimento:{
        type:DataTypes.DATE,
        allowNull:false
    },
    idade:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    genero:{
        type:DataTypes.STRING,
        allowNull:false
    },
    pais:{
        type:DataTypes.STRING,
        allowNull:true
    },
    estado:{
        type:DataTypes.STRING,
        allowNull:true
    },
    cidade:{
        type:DataTypes.STRING,
        allowNull:true
    },
    roles:{
        type:DataTypes.STRING,
        allowNull:false,
        defaultValue:"assinante"
    }
});

Assinante.sync()
.then(()=>{
    console.log(`A tabela assinantes foi criada com sucesso!`);
}).catch((error)=>{
    console.log(`Não foi possível criar a tabela assinantes. Error:${error}`);
});

export default Assinante;