const express = require ('express');
const router = express.Router();

const menuController = require('../controllers/menu');

// "/detalle"
router.get('/:id', menuController.menu);

module.exports = router