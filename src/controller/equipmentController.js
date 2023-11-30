const Equipments = require('../service/equipmentService');

class equipment {};

equipment.getEquipmentDetailsById = async (req, res) => {
    console.log(`----------- In equipmentContoller file & getEquipmentDetailsById method-----------------------`);
    try{
        const response = await new Equipments().getEquipmentDetailsById(req.params.id);
        res.status(200).send(response)
    } catch(err) {
        console.log(`---------In catch block of equipmentContoller file & getEquipmentDetailsById method-----------------------`);
        res.status(404).send({
            error: 'Equipment not found',
            message: err.message
        });
    }
};

equipment.getAllEquipment = async (req, res) => {
    console.log(`----------- In equipmentContoller file & getAllEquipment method-----------------------`);
    try{
        const response = await new Equipments().getAllEquipment();
        res.status(200).send(response)
    } catch(err) {
        console.log(`---------In catch block of equipmentContoller file & getAllEquipment method-----------------------`);
        res.status(500).send({
            error: 'Internal Server Error',
            message: err.message
        });
    }
};

equipment.saveNewEquipment = async (req, res) => {
    console.log(`----------- In equipmentContoller file & saveNewEquipment method-----------------------`);
    try{
        await new Equipments().saveNewEquipment(req.body);
        res.status(201).send({
            message: 'Equipment saved successfully!!!'
        })
    } catch(err) {
        console.log(`---------In catch block of equipmentContoller file & saveNewEquipment method-----------------------`);
        res.status(500).send({
            error: 'Internal Server Error',
            message: err.message
        });  
    }
};

equipment.updateEquipmentById = async (req, res) => {
    console.log(`----------- In equipmentContoller file & updateEquipmentById method-----------------------`);
    try{
        const equipment = new Equipments();
    } catch(err) {
        console.log(`---------In catch block of equipmentContoller file & updateEquipmentById method-----------------------`); 
    }
};

equipment.updateEquipment = async (req, res) => {
    console.log(`----------- In equipmentContoller file & updateEquipment method-----------------------`);
    try{
        const equipment = new Equipments();
    } catch(err) {
        console.log(`---------In catch block of equipmentContoller file & updateEquipment method-----------------------`);
    }
};

equipment.getManufactureOfEquipment = async (req, res) => {
    console.log(`----------- In equipmentContoller file & getManufactureOfEquipment method-----------------------`);
    try{
        const equipment = new Equipments();
    } catch(err) {
        console.log(`---------In catch block of equipmentContoller file & getManufactureOfEquipment method-----------------------`);
    }
};

equipment.deleteEquipment = async (req, res) => {
    console.log(`----------- In equipmentContoller file & deleteEquipment method-----------------------`);
    try{
        const equipment = new Equipments();
    } catch(err) {
        console.log(`---------In catch block of equipmentContoller file & deleteEquipment method-----------------------`);
    }
};

module.exports = equipment;

