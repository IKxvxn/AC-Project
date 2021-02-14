const mongoose = require('mongoose')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const config = require('../config')
const usuarioModel = require('../models/usuarioModel')
const ResponseMessages = require('../assets/responseMessages')
const ResponseBuilder = require('../assets/responseBuilder')
const Tools = require('../assets/tools')

function ingresar(req, res) {

  const username = req.params.username
  const password = req.params.password

  usuarioModel.findById(Tools.normaliceUsername(username)).then((userDB) => {
    if (!userDB) {
      ResponseBuilder.sendErrorResponse(res, ResponseMessages.loginError)
    }
    else if (bcrypt.compareSync(password, userDB.password)) {
      ResponseBuilder.sendSuccessResponse(res, ResponseMessages.loginSuccess + userDB._id, {
        username: userDB._id,
        token: jwt.sign({ id: username }, config.pass, { expiresIn: 86400 })
      })
    }
    else {
      ResponseBuilder.sendErrorResponse(res, ResponseMessages.loginError)
    }
  }).catch(error => {
    ResponseBuilder.sendErrorResponse(res, ResponseMessages.getMongoMessageByErrorCode(error.code))
  })

}

function crearCuenta(req, res) {
  const usuario = req.body

  if (!usuario.username || !usuario.password) {
    ResponseBuilder.sendErrorResponse(res, ResponseMessages.dataError)
  }

  let newUsuario = new usuarioModel({ password: bcrypt.hashSync(usuario.password, 8), _id: Tools.normaliceUsername(usuario.username) })

  newUsuario.save((error, resp) => {
    if (error) {
      ResponseBuilder.sendErrorResponse(res, ResponseMessages.getMongoMessageByErrorCode(error.code))
    }
    else {
      ResponseBuilder.sendSuccessResponse(res, ResponseMessages.createAccountSuccess, {})
    }
  })
}

function autentificarAccion(JWT) {
  return jwt.verify(JWT, config.pass);
}

module.exports = {
  ingresar, autentificarAccion, crearCuenta
}



