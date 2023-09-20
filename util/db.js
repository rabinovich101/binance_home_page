import mysql from "mysql";

const pool  = mysql.createPool({
    connectionLimit : 1000,
    host            : "localhost",
    user            : "root",
    password        : "Xx123456",
    database: "next_trading_platform",
});

export default pool;