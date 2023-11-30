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

router.post(
    `/equipment/saveNewEquipment`,
    validate.validateEquipmentDetails,
    equipmentController.saveNewEquipment
);

// equipment exists or not
router.put(
    `/equipment/updateEquipment/:id`,
    validate.validateId,
    validate.validateEquipmentDetails,
    equipmentController.updateEquipmentById
);

// equipment exists or not
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