import { Sequelize } from "sequelize";
const db = new Sequelize("crm_servicios", "root", "", {
    host: "localhost",
    dialect: "mysql"
})

export default db