const express = require('express')
const deckController = require('../controllers/deckController')
const router = express.Router()

router.post('/deck', function(req, res){deckController.crearDeck(req, res)})
router.get('/deck/:username/:token', function(req, res){deckController.getDecks(req, res)})
router.put('/deck', function(req, res){deckController.updateDeck(req, res)})
router.delete('/deck/:username/:token/:deckId', function(req, res){deckController.deleteDeck(req, res)})

router.post('/card', function(req, res){deckController.createCard(req, res)})

module.exports = router