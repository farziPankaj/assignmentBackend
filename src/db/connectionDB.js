const { Client } = require('pg');
require('dotenv').config();
 
async function connectDB(){
    try {
        console.log("----------------------------In connectDB file & connectDB method ------------------------------------");
        const client = new Client({
            host: process.env.dbHost,
            port: process.env.dbPort,
            database: process.env.dbName,
            user: process.env.dbUser,
            password: process.env.dbPassword,
        });
        await client.connect()
    } catch(err) {
        console.log("---------------- In catch block connectDB file & connectDB method------------------------------------");
        console.log(`Connection to DataBase failed\n${err}`);
        throw new Error(err.message);
    }
}

module.exports = connectDB;