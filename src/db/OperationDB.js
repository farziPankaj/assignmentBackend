const { Client } = require('pg');
require('dotenv').config();
let client;

class OperationDB {
    async connectDB(){
        try {
            console.log("----------------------------In OperationDB file & connectDB method ------------------------------------");
            client = new Client({
                host: process.env.dbHost,
                port: process.env.dbPort,
                database: process.env.dbName,
                user: process.env.dbUser,
                password: process.env.dbPassword,
            });
            await client.connect();
        } catch(err) {
            console.log("---------------- In catch block OperationDB file & connectDB method------------------------------------");
            console.log(`Connection to DataBase failed\n${err}`);
            throw new Error(err.message);
        }
    };

    async getAllEquipment(){
        try {
            console.log("----------------------------In OperationDB file & getAllEquipment method ------------------------------------");
            const result = await client.query(`SELECT * FROM equipments;`);
            console.log(result);
            return result;
        } catch(err) {
            console.log("---------------- In catch block OperationDB file & getAllEquipment method------------------------------------");
            console.log(`Connection to DataBase failed\n${err}`);
            throw new Error(err);
        }
    };
}

module.exports = OperationDB;