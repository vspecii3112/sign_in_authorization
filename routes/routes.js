var express = require('express');
var actions = require('../methods/actions');

var router = express.Router();

router.post('/authenticate', actions.authenticate);
router.post('/adduser', actions.addNew);
router.post('/getUserInfo', actions.getUserInfo);
router.put('/modifyUserInfo', actions.modifyUserInfo);
router.get('/getinfo', actions.getinfo);
router.get('/get_coin_info', actions.getCoinInfo);
router.get('/getTodayDate', actions.getTodayDate);


module.exports = router;