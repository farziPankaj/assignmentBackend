const Manufacturer = require('../service/manufacturerService');

class manufacturer {};

manufacturer.getAllManufacturers = async (_, res) => {
    console.log(`----------- In manufacturerContoller file & getAllManufacturers method-----------------------`);
    try{
        const response = await new Manufacturer().getAllManufacturers();
        res.status(200).send(response);
    } catch(err) {
        console.log(`---------In catch block of manufacturerContoller file & getAllManufacturers method-----------------------`);
        console.log(`${err}`);
        res.status(200).send({
            message: err.message
        }); 
    }
};

manufacturer.getManufactureDetailsById = async (req, res) => {
    console.log(`----------- In manufacturerContoller file & getManufactureDetailsById method-----------------------`);
    try{
        const manufacturerId = req.params.id
        const response = await new Manufacturer().getManufactureDetailsById(manufacturerId);
        if(response.count == 0) {
            throw new Error(`No manufacturer exist with given Id: ${manufacturerId}, please try again with other Id`)
        } else {
            res.status(200).send(response)
        }
    } catch(err) {
        console.log(`---------In catch block of manufacturerContoller file & getManufactureDetailsById method-----------------------`);
        console.log(`${err}`);
        res.status(200).send({
            message: err.message
        }); 
    }
};

manufacturer.saveNewManufacturer = async (req, res) => {
    console.log(`----------- In manufacturerContoller file & saveNewManufacturer method-----------------------`);
    try{
        await new Manufacturer().saveNewManufacturer(req.body);
        res.status(201).send({
            message: 'Manufacturer saved successfully!!!'
        })
    } catch(err) {
        console.log(`---------In catch block of manufacturerContoller file & saveNewManufacturer method-----------------------`);
        console.log(`${err}`);
        res.status(200).send({
            message: err.message
        });   
    }
};

manufacturer.deleteManufacturer = async (req, res) => {
    console.log(`----------- In manufacturerContoller file & deleteManufacturer method-----------------------`);
    try{
        const manufacturerId = req.params.id;
        const manufacturerObj = new Manufacturer();
        const manufacturerExists = await manufacturerObj.getManufactureDetailsById(manufacturerId);
        if(manufacturerExists.count == 0) {
            throw new Error(`No manufacturer exist with given Id: ${manufacturerId}, please try again with other Id`)
        } else {
            await manufacturerObj.deleteManufacturer(manufacturerId);
            res.status(200).send({
                equipment: manufacturerExists,
                message: `Manufacturer deleted successfully!!!`
            });   
        }
    } catch(err) {
        console.log(`---------In catch block of manufacturerContoller file & deleteManufacturer method-----------------------`);
        console.log(`${err}`);
        res.status(200).send({
            message: err.message
        });
    }
};

manufacturer.getEquipmentsOfManufacturerById = async (req, res) => {
    console.log(`----------- In manufacturerContoller file & getEquipmentsOfManufacturerById method-----------------------`);
    try{
        const manufacturerId = req.params.id;
        const manufacturerObj = new Manufacturer();
        const manufacturerExists = await manufacturerObj.getEquipmentsOfManufacturerById(manufacturerId);
        if(manufacturerExists.count == 0) {
            throw new Error(`No manufacturer exist with given Id: ${manufacturerObj}, please try again with other Id`)
        } else {
            const response = await manufacturerObj.getEquipmentsOfManufacturerById(manufacturerId);
            if (response.count == 1) {
                res.status(200).send(response);
            } else {
                res.status(200).send({
                    message: `Manufacurer has no equipment, please wait for sometime while we update our database`
                });
            }
        }
    } catch(err) {
        console.log(`---------In catch block of manufacturerContoller file & getEquipmentsOfManufacturerById method-----------------------`);
        console.log(`${err}`);
        res.status(200).send({
            message: err.message
        });
    }
};
/*
manufacturer.updateManufactureById = async (req, res, next) => {
    console.log(`----------- In manufacturerContoller file & updateManufactureById method-----------------------`);
    try{
        const manufacturer = new Manufacturer();
    } catch(err) {
        console.log(`---------In catch block of manufacturerContoller file & updateManufactureById method-----------------------`); 
    }
};
*/

module.exports = manufacturer;

