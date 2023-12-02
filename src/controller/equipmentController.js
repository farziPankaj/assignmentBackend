const Equipments = require('../service/equipmentService');

class equipment {};

equipment.getAllEquipment = async (req, res) => {
    console.log(`----------- In equipmentContoller file & getAllEquipment method-----------------------`);
    try{
        const response = await new Equipments().getAllEquipment();
        res.status(200).send(response)
    } catch(err) {
        console.log(`---------In catch block of equipmentContoller file & getAllEquipment method-----------------------`);
        console.log(`${err}`);
        res.status(500).send({
            message: err.message
        });
    }
};

equipment.getEquipmentDetailsById = async (req, res) => {
    console.log(`----------- In equipmentContoller file & getEquipmentDetailsById method-----------------------`);
    try{
        const equipmentId= req.params.id;
        const response = await new Equipments().getEquipmentDetailsById(equipmentId);
        if(response.count == 0) {
            throw new Error(`No equipment exist with given Id: ${equipmentId}, please try again with other Id`)
        } else {
            res.status(200).send(response)
        }
    } catch(err) {
        console.log(`---------In catch block of equipmentContoller file & getEquipmentDetailsById method-----------------------`);
        console.log(`${err}`);
        res.status(404).send({
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
        console.log(`${err}`)
        res.status(500).send({
            message: err.message
        });  
    }
};

equipment.updateEquipmentById = async (req, res) => {
    console.log(`----------- In equipmentContoller file & updateEquipmentById method-----------------------`);
    try{
        const equipmentId = req.params.id;
        const equipmentObj = new Equipments();
        const equipmentExists = await equipmentObj.getEquipmentDetailsById(equipmentId);
        if(equipmentExists.count == 0) {
            throw new Error(`No equipment exist with given Id: ${equipmentId}, please try again with other Id`)
        } else {
            const updatedData = equipmentObj.modifyRequestedData(req.body, equipmentExists.equipments[0]);
            await equipmentObj.updateEquipmentById(equipmentId, updatedData);
            res.status(200).send({
                message: `Equipment update successfully!!!`
            });   
        }
    } catch(err) {
        console.log(`---------In catch block of equipmentContoller file & updateEquipmentById method-----------------------`); 
        console.log(`${err}`);
        res.status(200).send({
            message: err.message
        }); 
    }
};

equipment.deleteEquipment = async (req, res) => {
    console.log(`----------- In equipmentContoller file & deleteEquipment method-----------------------`);
    try{
        const equipmentId = req.params.id;
        const equipmentObj = new Equipments();
        const equipmentExists = await equipmentObj.getEquipmentDetailsById(equipmentId);
        if(equipmentExists.count == 0) {
            throw new Error(`No equipment exist with given Id: ${equipmentId}, please try again with other Id`)
        } else {
            await equipmentObj.deleteEquipment(equipmentId);
            res.status(200).send({
                equipment: equipmentExists.equipments,
                message: `Equipment deleted successfully!!!`
            });   
        }
    } catch(err) {
        console.log(`---------In catch block of equipmentContoller file & deleteEquipment method-----------------------`);
        console.log(`${err}`);
        res.status(200).send({
            message: err.message
        });  
    }
};

equipment.getManufactureOfEquipment = async (req, res) => {
    console.log(`----------- In equipmentContoller file & getManufactureOfEquipment method-----------------------`);
    try{
        const equipmentId = req.params.id;
        const equipmentObj = new Equipments();
        const equipmentExists = await equipmentObj.getEquipmentDetailsById(equipmentId);
        if(equipmentExists.count == 0) {
            throw new Error(`No equipment exist with given Id: ${equipmentId}, please try again with other Id`)
        } else {
            const response = await equipmentObj.getManufactureOfEquipment(equipmentId);
            if (response.count == 1) {
                res.status(200).send(response);
            } else {
                res.status(200).send({
                    message: `Manufacurer is not assigned to given equipment, please wait for sometime while we update our database`
                });
            }
        }
    } catch(err) {
        console.log(`---------In catch block of equipmentContoller file & getManufactureOfEquipment method-----------------------`);
        console.log(`${err}`);
        res.status(200).send({
            message: err.message
        });
    }
};

module.exports = equipment;

