const mongoose = require('mongoose')

const usuariosSchema = mongoose.Schema({
  _id: {type: String},
  contraseña: {type: String},
})

const usuariosModel = mongoose.model("usuario", usuariosSchema)
module.exports = usuariosModel
