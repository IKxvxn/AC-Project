import { message } from 'antd';
import * as API_ROUTES from '../../assets/API_Routes'
import logo from "../../images/logo.png"

export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'

export const CREATE_ACCOUNT_REQUEST = 'CREATE_ACCOUNT_REQUEST'
export const CREATE_ACCOUNT_SUCCESS = 'CREATE_ACCOUNT_SUCCESS'
export const CREATE_ACCOUNT_FAILURE = 'CREATE_ACCOUNT_FAILURE'

export const LOAD_USER_STATE = 'LOAD_USER_STATE'

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST'


export function crearCuenta(usuario) {
    return function (dispatch) {
        dispatch({
            type: CREATE_ACCOUNT_REQUEST
        })
        fetch(API_ROUTES.AUTH + "/account", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(usuario),
        })
            .then(response => response.json())
            .then(datos => {
                if(datos.error){
                    message.error(datos.message)

                    dispatch({
                        type: CREATE_ACCOUNT_FAILURE
                    })
                }
            })
    }
}

/*export function ingresar(usuario, history) {
    return function (dispatch) {
        dispatch({
            type: NEW_LOGIN_REQUEST
        })
        fetch(API_URL + "/ingresar", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(usuario),
        })
            .then(response => response.json())
            .then(usuario => {
                if (usuario.error) {
                    if (usuario.type === 0) {
                        message.error("El usuario no existe en el sistema")
                    }
                    else {
                        message.error("La contraseña proporcionada es incorrecta")
                    }
                    dispatch({ type: NEW_LOGIN_FAILURE })
                }
                else {
                    message.success("Bienvenido nuevamente " + usuario.usuario.usuario)
                    history.push('/home/espera')
                    dispatch({
                        type: NEW_LOGIN_SUCCESS,
                        usuario: usuario.usuario
                    })
                }
            })
            .catch(error => {
                message.error(Mensajes.errorConexion)
                dispatch({
                    type: NEW_LOGIN_FAILURE,
                    error: error
                })
            })
    }
}*/