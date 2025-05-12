import mysql from 'mysql2/promise';
import dotenv from "dotenv";

dotenv.config();

const pool = mysql.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    port: process.env.PORT1,
    database: process.env.DATABASE,
    charset: 'utf8mb4' // Especificar un conjunto de caracteres compatible
});

export default pool;
