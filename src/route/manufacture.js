const express = require('express');
const router = express.Router();
const validate = require('../middleware/validator');

router.get('/manufacturer', (_, res) => {
    console.log(`Manufacture routes working fine.`);
    res.status(200).send({
        statusCode: 200,
        success: true,
        status: `Manufacture routes OK`,
        message: `Manufacture routes working fine`
    });
});
/*
router.get(
    `/manufacturer/:id/getManufactureDetailsById`,
    validate.validateId,
    manufactureController.getManufactureDetailsById
);

router.get(
    `/manufacturer/listAllManufactures`,
    manufactureController.getAllManufactures
);

router.post(
    `/manufacturer/saveNewManufacture`,
    validate.validateManufacturerDetails,
    manufactureController.saveNewManufacture
);

// manufacturer exists or not
router.put(
    `/manufacturer/updateManufacture/:id`,
    validate.validateId,
    validate.validateManufacturerDetails,
    manufactureController.updateManufactureById
);

// manufacturer exists or not
router.delete(
    `/manufacturer/:id/deleteManufacture`,
    validate.validateId,
    manufactureController.deleteManufacture
);

router.get(
    `/manufacturer/equipment/getEquipmentsOfManufacture/:id`,
    validate.validateId,
    manufactureController.getEquipmentsOfManufactureById
);
*/
module.exports = router;