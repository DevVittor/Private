import {DataTypes} from "sequelize";
import conn from "../database/conn.js";

const Plano = conn.define("planos",{
    planId:{
        type:DataTypes.STRING,
        allowNull:false
    },
    nome:{
        type:DataTypes.STRING,
        allowNull:false
    },
    frequencia:{
        type:DataTypes.STRING,
        allowNull:false
    },
    valor:{
        type:DataTypes.INTEGER,
        allowNull:false
    }
});

Plano.sync()
.then(()=>{
    console.log(`A tabela planos foi criada`);
}).catch((error)=>{
    console.log(`Não deu para criar a tabela planos. ${error}`);
})

export default Plano;