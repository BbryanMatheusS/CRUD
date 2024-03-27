import mysq from "mysql"

export const db = mysq.createConnection({
    host: "localhost",
    user: "root",
    password: "admin",
    database: "crud2"
});