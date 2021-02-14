const unknownError = "Ha ocurrido un problema en el servidor. Inténtelo más tarde"
const dataError = "Los datos proporcionados presentan problemas"
const loginError = "La cuenta no existe o la contraseña proporcionada es incorrecta"

const createAccountSuccess = "La cuenta se ha creado exitosamente"
const loginSuccess = "Bienvenido nuevamente, "

const mongoMessages = {
    11000: "No se pudo crear la cuenta porque el nombre de usuario ya existe"
}

function getMongoMessageByErrorCode(code) {
    let message = mongoMessages[code]

    if (!message) { return unknownError }
    return message
}


module.exports = {
    getMongoMessageByErrorCode, unknownError, createAccountSuccess, dataError, loginError, loginSuccess
}