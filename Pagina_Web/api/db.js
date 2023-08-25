import mysql from "mysql";
export const db=mysql.createConnection({
    host:"localhost",
    user: "root",
    password: "2102",
    database: "gestion2"
})
