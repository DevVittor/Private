import Sequelize from "sequelize";
import dotenv from "dotenv";
dotenv.config();

const database = process.env.DATABASE_DB;
const user = process.env.USER_DB;
const password = process.env.PASSWORD_DB;
const hostName = process.env.HOST_DB;

const conn = new Sequelize(`${database}`,`${user}`,`${password}`,{
    host: `${hostName}`,
    dialect:"mysql"
});

export default conn;