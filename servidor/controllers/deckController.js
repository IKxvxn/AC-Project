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

  if (usuario.username===undefined || deck.name===undefined || deck.colorKey===undefined || deck.bannerKey===undefined) {
    ResponseBuilder.sendErrorResponse(res, ResponseMessages.dataError)
  }

  if (usuario.token===undefined) {
    ResponseBuilder.sendErrorResponse(res, ResponseMessages.tokenError)
  }

  if(!AuthController.autentificarAccion(usuario.token)){
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
        ResponseBuilder.sendSuccessResponse(res, ResponseMessages.createDeckSucces, deck)
      }
    })
  }
}

module.exports = {
  crearDeck
}



