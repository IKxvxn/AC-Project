const mongoose = require('mongoose')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const deckModel = require('../models/deckModel')
const AuthController = require('./authController')
const ResponseMessages = require('../assets/responseMessages')
const ResponseBuilder = require('../assets/responseBuilder')

function crearDeck(req, res) {

  const usuario = req.body.user
  const deck = req.body.deck

  if (usuario.username === undefined || deck.name === undefined || deck.colorKey === undefined || deck.bannerKey === undefined) {
    ResponseBuilder.sendErrorResponse(res, ResponseMessages.dataError)
  }

  else if (usuario.token === undefined) {
    ResponseBuilder.sendErrorResponse(res, ResponseMessages.tokenError)
  }

  else if (!AuthController.autentificarAccion(usuario.token)) {
    ResponseBuilder.sendErrorResponse(res, ResponseMessages.tokenExpired)
  }

  else {

    deck._id = uuid.v4()

    let newDeck = new deckModel({
      _id: deck._id,
      owner: usuario.username,
      name: deck.name,
      colorKey: deck.colorKey,
      bannerKey: deck.bannerKey
    })

    newDeck.save((error, resp) => {
      if (error) {
        ResponseBuilder.sendErrorResponse(res, ResponseMessages.getMongoMessageByErrorCode(error.code))
      }
      else {
        ResponseBuilder.sendSuccessResponse(res, ResponseMessages.createDeckSuccess, deck)
      }
    })
  }
}

function getDecks(req, res) {

  const username = req.params.username
  const token = req.params.token
  console.log(AuthController.autentificarAccion(token))
  if (username === undefined) {
    ResponseBuilder.sendErrorResponse(res, ResponseMessages.dataError)
  }

  else if (token === undefined) {
    ResponseBuilder.sendErrorResponse(res, ResponseMessages.tokenError)
  }

  else if (!AuthController.autentificarAccion(token)) {
    ResponseBuilder.sendErrorResponse(res, ResponseMessages.tokenExpired)
  }
  else {
    deckModel.find({ owner: username }, { cards: 0 }).then((decksDB) => {
      ResponseBuilder.sendSuccessResponse(res, "", decksDB)
    }).catch(error => {
      ResponseBuilder.sendErrorResponse(res, ResponseMessages.getMongoMessageByErrorCode(error.code))
    })
  }
}

function updateDeck(req, res) {

  const usuario = req.body.user
  const deck = req.body.deck

  if (usuario.username === undefined || deck.name === undefined || deck.colorKey === undefined || deck.bannerKey === undefined || deck._id === undefined) {
    ResponseBuilder.sendErrorResponse(res, ResponseMessages.dataError)
  }

  else if (usuario.token === undefined) {
    ResponseBuilder.sendErrorResponse(res, ResponseMessages.tokenError)
  }

  else if (!AuthController.autentificarAccion(usuario.token)) {
    ResponseBuilder.sendErrorResponse(res, ResponseMessages.tokenExpired)
  }

  else {

    deckModel.findOneAndUpdate({ _id: deck._id }, { $set: deck }, { new: true }).exec((error, deck) => {
      if (error) {
        ResponseBuilder.sendErrorResponse(res, ResponseMessages.getMongoMessageByErrorCode(error.code))
      }
      else {
        ResponseBuilder.sendSuccessResponse(res, ResponseMessages.updateDeckSucces, deck)
      }
    })
  }
}

function deleteDeck(req, res) {

  const username = req.params.username
  const token = req.params.token
  const deckId = req.params.deckId

  if (username === undefined || deckId === undefined) {
    ResponseBuilder.sendErrorResponse(res, ResponseMessages.dataError)
  }

  else if (token === undefined) {
    ResponseBuilder.sendErrorResponse(res, ResponseMessages.tokenError)
  }

  else if (!AuthController.autentificarAccion(token)) {
    ResponseBuilder.sendErrorResponse(res, ResponseMessages.tokenExpired)
  }
  else {
    deckModel.deleteOne({ _id: deckId, owner: username }).then((result) => {
      if(result.deletedCount===0){
        ResponseBuilder.sendErrorResponse(res, ResponseMessages.deleteDeckError)
      }
      else{
        ResponseBuilder.sendSuccessResponse(res, ResponseMessages.deleteDeckSuccess)
      }
    }).catch(error => {
      ResponseBuilder.sendErrorResponse(res, ResponseMessages.getMongoMessageByErrorCode(error.code))
    })
  }
}


module.exports = {
  crearDeck, getDecks, updateDeck, deleteDeck
}



