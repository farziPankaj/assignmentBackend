const OperationDB = require("../db/OperationDB");
const { v4: uuidv4 } = require('uuid');


class Equipments {

    async getAllEquipment() {
        console.log(`--------------- In equipmentSerivce file & getAllEquipment method -----------------------------`);
        try {
            const response = await new OperationDB().getAllEquipment();
            return { equipments: response.rows, count: response.rowCount };
        } catch(err) {
            console.log(`---------In catch block of equipmentService file & getAllEquipment method-----------------------`);
            throw new Error(err.message); 
        }
    };

    async getEquipmentDetailsById(id) {
        console.log(`--------------- In equipmentSerivce file & getEquipmentDetailsById method -----------------------------`);
        try {
            const response = await new OperationDB().getEquipmentDetailsById(id);
            return { equipments: response.rows, count: response.rowCount };
        } catch(err) {
            console.log(`---------In catch block of equipmentService file & getEquipmentDetailsById method-----------------------`);
            throw new Error(err.message); 
        }
    };

    async saveNewEquipment(equipmentDetails) {
        console.log(`--------------- In equipmentSerivce file & saveNewEquipment method -----------------------------`);
        try {
            equipmentDetails.id = uuidv4();
            const response = await new OperationDB().saveNewEquipment(equipmentDetails);
            if(response.rowCount == 1) {
                return
            }
            throw new Error(`Error while saving equipment`);
        } catch(err) {
            console.log(`---------In catch block of equipmentService file & saveNewEquipment method-----------------------`);
            throw new Error(err.message); 
        }
    };

    async updateEquipmentById(id, data) {
        console.log(`--------------- In equipmentSerivce file & updateEquipmentById method -----------------------------`);
        try {
            const response = await new OperationDB().updateEquipmentById(id, data);
            if(response.rowCount == 1) {
                return response
            }
            throw new Error(`Error while updating equipment`);
        } catch(err) {
            console.log(`---------In catch block of equipmentService file & updateEquipmentById method-----------------------`);
            throw new Error(err.message); 
        }
    };

    async deleteEquipment(id) {
        console.log(`----------- In equipmentService file & deleteEquipment method-----------------------`);
        try {
            const response = await new OperationDB().deleteEquipment(id);
            if(response.rowCount == 1) {
                return response.rowCount
            }
            throw new Error(`Error while deleting equipment`);
        } catch(err) {
            console.log(`---------In catch block of equipmentContoller file & deleteEquipment method-----------------------`);
            throw new Error(err.message); 
        }
    };

    async getManufactureOfEquipment(id) {
        console.log(`----------- In equipmentService file & getManufactureOfEquipment method-----------------------`);
        try {
            const response = await new OperationDB().getManufactureOfEquipment(id);
            return { manufacturer: response.rows, count: response.rowCount};
        } catch(err) {
            console.log(`---------In catch block of equipmentContoller file & getManufactureOfEquipment method-----------------------`);
            throw new Error(err.message); 
        }
    };

    modifyRequestedData(updatedData, originalData) {
        console.log(`----------- In equipmentService file & modifyRequestedData method-----------------------`);
        try {
            if(!updatedData.manufacturerId && originalData.manufacturerid) {
                updatedData.manufacturerId = originalData.manufacturerid;
            }

            if(!updatedData.model && originalData.model) {
                updatedData.manufacturerId = originalData.model;
            }

            if(!updatedData.serialNumber && originalData.serialnumber) {
                updatedData.serialNumber = originalData.serialnumber;
            }

            return updatedData;
        } catch(err) {
            console.log(`---------In catch block of equipmentContoller file & modifyRequestedData method-----------------------`);
            throw new Error(err.message); 
        }
    };
};

module.exports = Equipments;
