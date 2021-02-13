const express = require('express')
const authController = require('../controllers/authController')
const router = express.Router()

router.post('/crearCuenta', function(req, res){authController.crearCuenta})

module.exports = router