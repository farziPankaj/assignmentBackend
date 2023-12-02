const OperationDB = require("../db/OperationDB");
const { v4: uuidv4 } = require('uuid');

class Manufacturer {

    async getAllManufacturers() {
        console.log(`--------------- In equipmentSerivce file & getAllManufacturers method -----------------------------`);
        try {
            const response = await new OperationDB().getAllManufacturers();
            return { equipments: response.rows, count: response.rowCount };
        } catch(err) {
            console.log(`---------In catch block of equipmentService file & getAllManufacturers method-----------------------`);
            throw new Error(err.message); 
        }
    };

    async getManufactureDetailsById(id) {
        console.log(`--------------- In equipmentSerivce file & getManufactureDetailsById method -----------------------------`);
        try {
            const response = await new OperationDB().getManufactureDetailsById(id);
            return { equipments: response.rows, count: response.rowCount };
        } catch(err) {
            console.log(`---------In catch block of equipmentService file & getManufactureDetailsById method-----------------------`);
            throw new Error(err.message); 
        }
    };

    async saveNewManufacturer(manufacturerDetails) {
        console.log(`--------------- In equipmentSerivce file & saveNewManufacturer method -----------------------------`);
        try {
            manufacturerDetails.id = uuidv4();
            const response = await new OperationDB().saveNewManufacturer(manufacturerDetails);
            if (response.rowCount == 1) {
                return
            }
           throw new Error(`Error while saving manufacturer!!!`);
        } catch(err) {
            console.log(`---------In catch block of equipmentService file & saveNewManufacturer method-----------------------`);
            throw new Error(err.message); 
        }
    };

    async deleteManufacturer(id) {
        console.log(`--------------- In equipmentSerivce file & deleteManufacturer method -----------------------------`);
        try {
            const response = await new OperationDB().deleteManufacturer(id);
            if (response.rowCount == 1) {
                return
            }
           throw new Error(`Error while deleting manufacturer!!!`);
        } catch(err) {
            console.log(`---------In catch block of equipmentService file & deleteManufacturer method-----------------------`);
            throw new Error(err.message); 
        }
    };

    async getEquipmentsOfManufacturerById(id) {
        console.log(`----------- In equipmentService file & getEquipmentsOfManufacturerById method-----------------------`);
        try {
            const response = await new OperationDB().getEquipmentsOfManufacturerById(id);
            return { manufacturer: response.rows, count: response.rowCount};
        } catch(err) {
            console.log(`---------In catch block of equipmentContoller file & getEquipmentsOfManufacturerById method-----------------------`);
            throw new Error(err.message); 
        }
    };

    async updateManufacturerById() {
        console.log(`----------- In equipmentService file & updateManufacturerById method-----------------------`);
        try {
            const response = await new OperationDB().updateManufacturerById(id);
            return { manufacturer: response.rows, count: response.rowCount};
        } catch(err) {
            console.log(`---------In catch block of equipmentContoller file & updateManufacturerById method-----------------------`);
            throw new Error(err.message); 
        }
    };

};

module.exports = Manufacturer;
