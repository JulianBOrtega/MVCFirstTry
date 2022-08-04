var express = require('express');
var router = express.Router();

const aboutController = require("../controllers/aboutController.js");

/* GET home page. */
router.get('/', aboutController.about);

module.exports = router;