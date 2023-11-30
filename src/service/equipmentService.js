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
            if(response.rowCount == 0) {
                throw new Error(`No equipment exist with given Id: ${id}, please try again with other Id`);
            }
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
            // // return { equipments: response.rows, count: response.rowCount };
            // return response;
        } catch(err) {
            console.log(`---------In catch block of equipmentService file & saveNewEquipment method-----------------------`);
            throw new Error(err.message); 
        }
    };

    async updateEquipmentById() {
        try {

        } catch(err) {

        }
    };

    async deleteEquipment() {
        try {

        } catch(err) {

        }
    };

    async getManufactureOfEquipment() {
        try {

        } catch(err) {

        }
    };
};

module.exports = Equipments;
