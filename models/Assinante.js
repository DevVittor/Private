import {DataTypes} from "sequelize";
import conn from "../database/conn.js";
import Users from "./Users.js";

const Assinante = conn.define("assinantes",{
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },  
    assinante:{
        type:DataTypes.BOOLEAN,
        allowNull:false,
        defaultValue:false
    }
});

// Especificando que a chave estrangeira na tabela Assinante é chamada de 'user_id' e refere-se ao id na tabela Users
Assinante.belongsTo(Users, { foreignKey: 'userId' });
Assinante.sync()
.then(()=>{
    console.log(`A tabela assinantes foi criada e associada a tabel usuário`);
}).catch((error)=>{
    console.log(`Não foi possível associar e nem criar a tabela assinantes. ${erro}`);
})
export default Assinante;