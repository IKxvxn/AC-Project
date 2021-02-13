//login
export const username = [{ required: true, message: '🦴 Por favor digite su usuario' }]
export const password = [{ required: true, message: '🦴 Por favor digite su contraseña' }]

//create user
export const newUsername = [
    { required: true, message: '🦴 Por favor elija su usuario' },
    { min: 5, message: '🦴 Número de caracteres mínimo: 5' }
]

export const newPassword = [
    { required: true, message: '🦴 Por favor elija su contraseña' },
    { pattern: "(?=.*?[0-9])(?=.*?[A-Za-z]).+", message: '🦴 Debe contener números y letras' }
]