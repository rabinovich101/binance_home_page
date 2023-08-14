const mysql = require('mysql');

const pool  = mysql.createPool({
    connectionLimit : 1000,
    host            : "localhost",
    user            : "root",
    password        : "123456",
    database: "next_trading_platform",
});

export default pool;