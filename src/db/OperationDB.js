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
            console.log("--------------- DataBase Connection Successfull ----------------------------")
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
            throw new Error(err);
        }
    };

    async getEquipmentDetailsById(id) {
        try {
            console.log("----------------------------In OperationDB file & getEquipmentDetailsById method ------------------------------------");
            const result = await client.query(`SELECT * FROM equipments WHERE id='${id}';`);
            console.log(result);
            return result;
        } catch(err) {
            console.log("---------------- In catch block OperationDB file & getEquipmentDetailsById method------------------------------------");
            throw new Error(err);
        }
    };

    async saveNewEquipment(equipmentDetails) {
        try {
            console.log("----------------------------In OperationDB file & saveNewEquipment method ------------------------------------");
            const result = await client.query(`INSERT INTO equipments (id, model, serialnumber, manufacturerid) VALUES ('${equipmentDetails.id}','${equipmentDetails.model}','${equipmentDetails.serialNumber}','${equipmentDetails.manufacturerId}');`);
            console.log(result);
            return result;
        } catch(err) {
            console.log("---------------- In catch block OperationDB file & saveNewEquipment method------------------------------------");
            throw new Error(err);
        }
    }
}

module.exports = OperationDB;