const { Pool } = require('pg');
require('dotenv').config();
let pool;

class OperationDB {
    async connectDB(){
        try {
            console.log("----------------------------In OperationDB file & connectDB method ------------------------------------");
            pool = new Pool({
                host: process.env.dbHost,
                port: process.env.dbPort,
                database: process.env.dbName,
                user: process.env.dbUser,
                password: process.env.dbPassword,
                max: 5,
                idleTimeoutMillis: 30000,
                connectionTimeoutMillis: 2000,
            });
            await pool.connect();
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
            const result = await pool.query(`SELECT * FROM equipments;`);
            return result;
        } catch(err) {
            console.log("---------------- In catch block OperationDB file & getAllEquipment method------------------------------------");
            console.log(`${err}`);
            throw new Error(err);
        }
    };

    async getEquipmentDetailsById(id) {
        try {
            console.log("----------------------------In OperationDB file & getEquipmentDetailsById method ------------------------------------");
            const result = await pool.query(`SELECT * FROM equipments WHERE id='${id}';`);
            return result;
        } catch(err) {
            console.log("---------------- In catch block OperationDB file & getEquipmentDetailsById method------------------------------------");
            console.log(`${err}`);
            throw new Error(err);
        }
    };

    async saveNewEquipment(equipmentDetails) {
        try {
            console.log("----------------------------In OperationDB file & saveNewEquipment method ------------------------------------");
            const result = await pool.query(`INSERT INTO equipments (id, model, serialnumber, manufacturerid) VALUES ('${equipmentDetails.id}','${equipmentDetails.model}','${equipmentDetails.serialNumber}','${equipmentDetails.manufacturerId}');`);
            return result;
        } catch(err) {
            console.log("---------------- In catch block OperationDB file & saveNewEquipment method------------------------------------");
            console.log(`${err}`);
            throw new Error(err);
        }
    };

    async deleteEquipment(id) {
        try {
            console.log("----------------------------In OperationDB file & deleteEquipment method ------------------------------------");
            const result = await pool.query(`DELETE FROM equipments WHERE id='${id}';`);
            return result;
        } catch(err) {
            console.log("---------------- In catch block OperationDB file & deleteEquipment method------------------------------------");
            console.log(`${err}`);
            throw new Error(err);
        } 
    };

    async getManufactureOfEquipment(id) {
        try {
            console.log("----------------------------In OperationDB file & getManufactureOfEquipment method ------------------------------------");
            const result = await pool.query(`SELECT id, name FROM manufacturer WHERE id=(SELECT manufacturerid FROM equipments WHERE id='${id}');`);
            return result;
        } catch(err) {
            console.log("---------------- In catch block OperationDB file & getManufactureOfEquipment method------------------------------------");
            console.log(`${err}`);
            throw new Error(err);
        } 
    }

    async updateEquipmentById(id, data) {
        try {
            console.log("----------------------------In OperationDB file & updateEquipmentById method ------------------------------------");
            const result = await pool.query(`UPDATE equipments SET model='${data.model}', serialnumber='${data.serialNumber}', manufacturerid='${data.manufacturerId}' WHERE id='${id}';`);
            return result;
        } catch(err) {
            console.log("---------------- In catch block OperationDB file & updateEquipmentById method------------------------------------");
            console.log(`${err}`);
            throw new Error(err);
        } 
    }
}

module.exports = OperationDB;