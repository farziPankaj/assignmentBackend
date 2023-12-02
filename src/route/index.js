const express = require('express');
const router = express.Router();
const equipments =  require('../route/equipments');
const manufacturer =  require('../route/manufacture');

router.use(equipments);
router.use(manufacturer);

module.exports = router;

