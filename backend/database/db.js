import { Sequelize } from "sequelize";
const db = new Sequelize("crm_servicios", "root", "", {
    host: "localhost",
    dialect: "mysql"
})

export default db
/*
const db = new Sequelize(
  process.env.MYSQL_DATABASE,
  process.env.MYSQLUSER,
  process.env.MYSQL_ROOT_PASSWORD,
  {
    host: process.env.MYSQLHOST,
    port: process.env.MYSQLPORT || 3306,
    dialect: "mysql",
    logging: false
  }
);
*/
