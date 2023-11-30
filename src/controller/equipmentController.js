const Equipments = require('../service/equipmentService');

class equipment {};

equipment.getEquipmentDetailsById = async (req, res, next) => {
    console.log(`----------- In equipmentContoller file & getEquipmentDetailsById method-----------------------`);
    try{
        const equipment = new Equipments();
    } catch(err) {
        console.log(`---------In catch block of equipmentContoller file & getEquipmentDetailsById method-----------------------`);
    }
};

equipment.getAllEquipment = async (req, res, next) => {
    console.log(`----------- In equipmentContoller file & getAllEquipment method-----------------------`);
    try{
        const equipment = new Equipments();
        const response = await equipment.getAllEquipment();
        res.status(200).send(response)
    } catch(err) {
        console.log(`---------In catch block of equipmentContoller file & getAllEquipment method-----------------------`);
        throw new Error(err.message); 
    }
};

equipment.saveNewEquipment = async (req, res, next) => {
    console.log(`----------- In equipmentContoller file & saveNewEquipment method-----------------------`);
    try{
        const equipment = new Equipments();
    } catch(err) {
        console.log(`---------In catch block of equipmentContoller file & saveNewEquipment method-----------------------`);  
    }
};

equipment.updateEquipmentById = async (req, res, next) => {
    console.log(`----------- In equipmentContoller file & updateEquipmentById method-----------------------`);
    try{
        const equipment = new Equipments();
    } catch(err) {
        console.log(`---------In catch block of equipmentContoller file & updateEquipmentById method-----------------------`); 
    }
};

equipment.updateEquipment = async (req, res, next) => {
    console.log(`----------- In equipmentContoller file & updateEquipment method-----------------------`);
    try{
        const equipment = new Equipments();
    } catch(err) {
        console.log(`---------In catch block of equipmentContoller file & updateEquipment method-----------------------`);
    }
};

equipment.getManufactureOfEquipment = async (req, res, next) => {
    console.log(`----------- In equipmentContoller file & getManufactureOfEquipment method-----------------------`);
    try{
        const equipment = new Equipments();
    } catch(err) {
        console.log(`---------In catch block of equipmentContoller file & getManufactureOfEquipment method-----------------------`);
    }
};

equipment.deleteEquipment = async (req, res, next) => {
    console.log(`----------- In equipmentContoller file & deleteEquipment method-----------------------`);
    try{
        const equipment = new Equipments();
    } catch(err) {
        console.log(`---------In catch block of equipmentContoller file & deleteEquipment method-----------------------`);
    }
};

module.exports = equipment;

