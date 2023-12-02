const express = require('express');
const router = express.Router();
const validate = require('../middleware/validator');
const equipmentController = require('../controller/equipmentController');

router.get('/equipments', (_, res) => {
    console.log(`Equipments routes working fine.`);
    res.status(200).send({
        statusCode: 200,
        success: true,
        status: `Equipments routes OK`,
        message: `Equipments routes working fine`
    });
});

router.get(
    `/equipment/:id/getEquipmentDetailsById`,
    validate.validateId,
    equipmentController.getEquipmentDetailsById
);

router.get(
    `/equipment/listAllEquipment`,
    equipmentController.getAllEquipment
);

// Pending: fkey validation
// Pending: Check for existsing data only for serial Number
router.post(
    `/equipment/saveNewEquipment`,
    validate.validateEquipmentDetails,
    equipmentController.saveNewEquipment
);

// Pending: check for serialNumber & ManufacturerId (same as above validation)
router.patch(
    `/equipment/updateEquipment/:id`,
    validate.validateId,
    validate.validateEquipmentDetails,
    equipmentController.updateEquipmentById
);

router.delete(
    `/equipment/:id/deleteEquipment`,
    validate.validateId, 
    equipmentController.deleteEquipment
);

router.get(
    `/equipment/manufacturer/getManufactureOfEquipment/:id`,
    validate.validateId,
    equipmentController.getManufactureOfEquipment
);

module.exports = router;