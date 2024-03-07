import Sequelize from "sequelize";

const conn = new Sequelize("private","root","",{
    host:"localhost",
    dialect:"mysql"
});

export default conn;