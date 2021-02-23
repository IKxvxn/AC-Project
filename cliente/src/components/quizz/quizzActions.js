import { message } from 'antd';
import * as LocalStorage from '../../assets/localStorage'
import * as API_ROUTES from '../../assets/API_Routes'
import * as Messages from '../../assets/mensajes'

export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'

export function crearQuizz(usuario) {
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
                else {
                    message.success(datos.message)
                    dispatch({
                        type: CREATE_ACCOUNT_SUCCESS,
                    })
                }
            })
            .catch(error => {
                message.error(Messages.serverConecctionError)
                dispatch({
                  type: CREATE_ACCOUNT_FAILURE,
                })
            })
    }
}