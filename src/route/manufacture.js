const express = require('express');
const router = express.Router();
const validate = require('../middleware/validator');
const manufactureController = require('../controller/manufactureController');

router.get('/manufacturer', (_, res) => {
    console.log(`Manufacture routes working fine.`);
    res.status(200).send({
        statusCode: 200,
        success: true,
        status: `Manufacture routes OK`,
        message: `Manufacture routes working fine`
    });
});

router.get(
    `/manufacturer/listAllManufacturers`,
    manufactureController.getAllManufacturers
);

router.get(
    `/manufacturer/:id/getManufacturerDetailsById`,
    validate.validateId,
    manufactureController.getManufactureDetailsById
);

// duplicate saving - db modification name unique
router.post(
    `/manufacturer/saveNewManufacturer`,
    validate.validateManufacturerDetails,
    manufactureController.saveNewManufacturer
);

router.delete(
    `/manufacturer/:id/deleteManufacturer`,
    validate.validateId,
    manufactureController.deleteManufacturer
);

router.get(
    `/manufacturer/equipment/getEquipmentsOfManufacture/:id`,
    validate.validateId,
    manufactureController.getEquipmentsOfManufacturerById
);
/*
// manufacturer exists or not
router.put(
    `/manufacturer/updateManufacture/:id`,
    validate.validateId,
    validate.validateManufacturerDetails,
    manufactureController.updateManufactureById
);
*/
module.exports = router;