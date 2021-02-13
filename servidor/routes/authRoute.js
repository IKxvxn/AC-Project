const express = require('express')
const authController = require('../controllers/authController')
const router = express.Router()

router.post('/account', function(req, res){authController.crearCuenta(req, res)})

module.exports = router