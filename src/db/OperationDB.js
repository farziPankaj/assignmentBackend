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
        console.log("----------------------------In OperationDB file & getAllEquipment method ------------------------------------");
        try {
            const result = await pool.query(`SELECT * FROM equipments;`);
            return result;
        } catch(err) {
            console.log("---------------- In catch block OperationDB file & getAllEquipment method------------------------------------");
            console.log(`${err}`);
            throw new Error(err);
        }
    };

    async getEquipmentDetailsById(id) {
        console.log("----------------------------In OperationDB file & getEquipmentDetailsById method ------------------------------------");
        try {
            const result = await pool.query(`SELECT * FROM equipments WHERE id='${id}';`);
            return result;
        } catch(err) {
            console.log("---------------- In catch block OperationDB file & getEquipmentDetailsById method------------------------------------");
            console.log(`${err}`);
            throw new Error(err);
        }
    };

    async saveNewEquipment(equipmentDetails) {
        console.log("----------------------------In OperationDB file & saveNewEquipment method ------------------------------------");
        try {
            const result = await pool.query(`INSERT INTO equipments (id, model, serialnumber, manufacturerid) VALUES ('${equipmentDetails.id}','${equipmentDetails.model}','${equipmentDetails.serialNumber}','${equipmentDetails.manufacturerId}');`);
            return result;
        } catch(err) {
            console.log("---------------- In catch block OperationDB file & saveNewEquipment method------------------------------------");
            console.log(`${err}`);
            throw new Error(err);
        }
    };

    async deleteEquipment(id) {
        console.log("----------------------------In OperationDB file & deleteEquipment method ------------------------------------");
        try {
            const result = await pool.query(`DELETE FROM equipments WHERE id='${id}';`);
            return result;
        } catch(err) {
            console.log("---------------- In catch block OperationDB file & deleteEquipment method------------------------------------");
            console.log(`${err}`);
            throw new Error(err);
        } 
    };

    async getManufactureOfEquipment(id) {
        console.log("----------------------------In OperationDB file & getManufactureOfEquipment method ------------------------------------");
        try {
            const result = await pool.query(`SELECT id, name FROM manufacturer WHERE id=(SELECT manufacturerid FROM equipments WHERE id='${id}');`);
            return result;
        } catch(err) {
            console.log("---------------- In catch block OperationDB file & getManufactureOfEquipment method------------------------------------");
            console.log(`${err}`);
            throw new Error(err);
        } 
    }

    async updateEquipmentById(id, data) {
        console.log("----------------------------In OperationDB file & updateEquipmentById method ------------------------------------");
        try {
            const result = await pool.query(`UPDATE equipments SET model='${data.model}', serialnumber='${data.serialNumber}', manufacturerid='${data.manufacturerId}' WHERE id='${id}';`);
            return result;
        } catch(err) {
            console.log("---------------- In catch block OperationDB file & updateEquipmentById method------------------------------------");
            console.log(`${err}`);
            throw new Error(err);
        } 
    };

    async getAllManufacturers() {
        console.log("----------------------------In OperationDB file & getAllManufacturers method ------------------------------------");
        try {
            const result = await pool.query(`SELECT * FROM manufacturer;`);
            return result;
        } catch(err) {
            console.log("---------------- In catch block OperationDB file & getAllManufacturers method------------------------------------");
            console.log(`${err}`);
            throw new Error(err);
        }
    };

    async getManufactureDetailsById(id) {
        console.log("----------------------------In OperationDB file & getManufactureDetailsById method ------------------------------------");
        try {
            const result = await pool.query(`SELECT * FROM manufacturer WHERE id='${id}';`);
            return result;
        } catch(err) {
            console.log("---------------- In catch block OperationDB file & getManufactureDetailsById method------------------------------------");
            console.log(`${err}`);
            throw new Error(err);
        }
    };

    async saveNewManufacturer(manufacturerDetails) {
        console.log("----------------------------In OperationDB file & saveNewManufacturer method ------------------------------------");
        try {
            const result = await pool.query(`INSERT INTO manufacturer (id, name) VALUES ('${manufacturerDetails.id}','${manufacturerDetails.name}');`);
            return result;
        } catch(err) {
            console.log("---------------- In catch block OperationDB file & saveNewManufacturer method------------------------------------");
            console.log(`${err}`);
            throw new Error(err);
        }
    };

    async deleteManufacturer(id) {
        console.log("----------------------------In OperationDB file & deleteManufacturer method ------------------------------------");
        try {
            const result = await pool.query(`DELETE FROM manufacturer WHERE id='${id}';`);
            return result;
        } catch(err) {
            console.log("---------------- In catch block OperationDB file & deleteManufacturer method------------------------------------");
            console.log(`${err}`);
            throw new Error(err);
        }
    };

    async getEquipmentsOfManufacturerById(id) {
        console.log("----------------------------In OperationDB file & getEquipmentsOfManufacturerById method ------------------------------------");
        try {
            const result = await pool.query(`SELECT * FROM equipments WHERE manufacturerid='${id}';`);
            return result;
        } catch(err) {
            console.log("---------------- In catch block OperationDB file & getEquipmentsOfManufacturerById method------------------------------------");
            console.log(`${err}`);
            throw new Error(err);
        }
    };

    async getEquipmentsOfManufacturerById(id) {
        console.log("----------------------------In OperationDB file & getEquipmentsOfManufacturerById method ------------------------------------");
        try {
            const result = await pool.query(`SELECT * FROM equipments WHERE manufacturerid='${id}';`);
            return result;
        } catch(err) {
            console.log("---------------- In catch block OperationDB file & getEquipmentsOfManufacturerById method------------------------------------");
            console.log(`${err}`);
            throw new Error(err);
        }
    };

    async updateManufacturerById(id) {
        console.log("----------------------------In OperationDB file & updateManufacturerById method ------------------------------------");
        try {
            const result = await pool.query(`SELECT * FROM equipments WHERE manufacturerid='${id}';`);
            return result;
        } catch(err) {
            console.log("---------------- In catch block OperationDB file & updateManufacturerById method------------------------------------");
            console.log(`${err}`);
            throw new Error(err);
        }
    };
}

module.exports = OperationDB;