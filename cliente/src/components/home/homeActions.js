import { message } from 'antd';
import * as API_ROUTES from '../../assets/API_Routes'
import * as Messages from '../../assets/mensajes'
import * as LocalStorage from '../../assets/localStorage'

export const CREATE_DECK_REQUEST = 'CREATE_DECK_REQUEST'
export const CREATE_DECK_SUCCESS = 'CREATE_DECK_SUCCESS'
export const CREATE_DECK_FAILURE = 'CREATE_DECK_FAILURE'


export function crearMazo(deck, onSucces) {
    
    let requestBody={
        deck: deck,
        user: LocalStorage.loadState().user
    }

    return function (dispatch) {
        dispatch({
            type: CREATE_DECK_REQUEST
        })
        fetch(API_ROUTES.HOME + "/deck", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(requestBody),
        })
            .then(response => response.json())
            .then(datos => {
                if(datos.error){
                    message.error(datos.message)

                    dispatch({
                        type: CREATE_DECK_FAILURE
                    })
                }
                else {
                    message.success(datos.message)
                    onSucces()
                    dispatch({
                        type: CREATE_DECK_SUCCESS,
                        deck: deck
                    })
                }
            })
            .catch(error => {
                message.error(Messages.serverConecctionError)
                dispatch({
                  type: CREATE_DECK_FAILURE,
                })
            })
    }
}