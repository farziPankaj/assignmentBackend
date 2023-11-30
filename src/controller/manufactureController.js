const Manufacturer = require('../service/manufacturerService');

class manufacturer {};

manufacturer.getManufactureDetailsById = async (req, res, next) => {
    console.log(`----------- In manufacturerContoller file & getManufactureDetailsById method-----------------------`);
    try{
        const manufacturer = new Manufacturer();
    } catch(err) {
        console.log(`---------In catch block of manufacturerContoller file & getManufactureDetailsById method-----------------------`);
    }
};

manufacturer.getAllManufactures = async (req, res, next) => {
    console.log(`----------- In manufacturerContoller file & getAllManufactures method-----------------------`);
    try{
        const manufacturer = new Manufacturer();
    } catch(err) {
        console.log(`---------In catch block of manufacturerContoller file & getAllManufactures method-----------------------`);  
    }
};

manufacturer.saveNewManufacture = async (req, res, next) => {
    console.log(`----------- In manufacturerContoller file & saveNewManufacture method-----------------------`);
    try{
        const manufacturer = new Manufacturer();
    } catch(err) {
        console.log(`---------In catch block of manufacturerContoller file & saveNewManufacture method-----------------------`);  
    }
};

manufacturer.updateManufactureById = async (req, res, next) => {
    console.log(`----------- In manufacturerContoller file & updateManufactureById method-----------------------`);
    try{
        const manufacturer = new Manufacturer();
    } catch(err) {
        console.log(`---------In catch block of manufacturerContoller file & updateManufactureById method-----------------------`); 
    }
};

manufacturer.deleteManufacture = async (req, res, next) => {
    console.log(`----------- In manufacturerContoller file & deleteManufacture method-----------------------`);
    try{
        const manufacturer = new Manufacturer();
    } catch(err) {
        console.log(`---------In catch block of manufacturerContoller file & deleteManufacture method-----------------------`);
    }
};

manufacturer.getEquipmentsOfManufactureById = async (req, res, next) => {
    console.log(`----------- In manufacturerContoller file & getEquipmentsOfManufactureById method-----------------------`);
    try{
        const manufacturer = new Manufacturer();
    } catch(err) {
        console.log(`---------In catch block of manufacturerContoller file & getEquipmentsOfManufactureById method-----------------------`);
    }
};

module.exports = manufacturer;

