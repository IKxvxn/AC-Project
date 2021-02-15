const express = require('express')
const authController = require('../controllers/deckController')
const router = express.Router()

router.post('/deck', function(req, res){authController.crearDeck(req, res)})

module.exports = router