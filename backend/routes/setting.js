const express = require('express');
const router = express.Router();
const settingControllers = require('../controllers/setting');

router.post('/setting', userControllers.setting);

module.exports = router;


