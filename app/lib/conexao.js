import mysql from "mysql2/promise"

const conexao = await mysql.createConnection({
    host: "localhost", 
    user: "root",
    password: "",
    database: "gestao_rural"
})

export default conexao;