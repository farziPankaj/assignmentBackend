const OperationDB = require("../db/OperationDB");


class Equipments {

    async getAllEquipment() {
        try {
            const response = await new OperationDB().getAllEquipment();
            // const results = prepareResponseGetAllEquipments(response);
            return { equipments: response.rows, count: response.rowCount };
        } catch(err) {
            console.log(`---------In catch block of equipmentService file & getAllEquipment method-----------------------`);
            throw new Error(err); 
        }
    };

    async getEquipmentDetailsById() {
        try {

        } catch(err) {

        }
    };

    async saveNewEquipment() {
        try {

        } catch(err) {

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
