const express = require('express');
const app = express();
const equipments =  require('../route/equipments');
const manufacturer =  require('../route/manufacture');

app.use(equipments);
app.use(manufacturer);

module.exports = app;

