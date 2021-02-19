import { message } from 'antd';
import * as API_ROUTES from '../../assets/API_Routes'
import * as Messages from '../../assets/mensajes'
import * as LocalStorage from '../../assets/localStorage'
import { sleep } from '../../assets/tools'

export const CREATE_DECK_REQUEST = 'CREATE_DECK_REQUEST'
export const CREATE_DECK_SUCCESS = 'CREATE_DECK_SUCCESS'
export const CREATE_DECK_FAILURE = 'CREATE_DECK_FAILURE'

export const UPDATE_DECK_REQUEST = 'UPDATE_DECK_REQUEST'
export const UPDATE_DECK_SUCCESS = 'UPDATE_DECK_SUCCESS'
export const UPDATE_DECK_FAILURE = 'UPDATE_DECK_FAILURE'

export const GET_DECKS_REQUEST = 'GET_DECKS_REQUEST'
export const GET_DECKS_SUCCESS = 'GET_DECKS_SUCCESS'
export const GET_DECKS_FAILURE = 'GET_DECKS_FAILURE'

export const DELETE_DECK_REQUEST = 'DELETE_DECK_REQUEST'
export const DELETE_DECK_SUCCESS = 'DELETE_DECK_SUCCESS'
export const DELETE_DECK_FAILURE = 'DELETE_DECK_FAILURE'

export function crearMazo(deck, onSucces) {

    let requestBody = {
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
                if (datos.error) {
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
                        deck: datos.data
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

export function getMazos() {
    let user = LocalStorage.loadState().user

    return function (dispatch) {
        dispatch({
            type: GET_DECKS_REQUEST
        })
        fetch(API_ROUTES.HOME + "/deck/" + user.username + "/" + user.token, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        })
            .then(response => response.json())
            .then(datos => {
                if (datos.error) {
                    message.error(datos.message)

                    dispatch({
                        type: GET_DECKS_FAILURE
                    })
                }
                else {
                    sleep(0).then( () => { //Esto es sólo para que se note que manejo tiempos de carga
                        dispatch({
                            decks: datos.data,
                            type: GET_DECKS_SUCCESS
                        })
                    })
                }
            })
            .catch(error => {
                message.error(Messages.serverConecctionError)
                dispatch({
                    type: GET_DECKS_FAILURE,
                })
            })
    }
}

export function updateMazo(deck, onSucces) {

    let requestBody = {
        deck: deck,
        user: LocalStorage.loadState().user
    }

    return function (dispatch) {
        dispatch({
            type: CREATE_DECK_REQUEST
        })
        fetch(API_ROUTES.HOME + "/deck", {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(requestBody),
        })
            .then(response => response.json())
            .then(datos => {
                if (datos.error) {
                    message.error(datos.message)

                    dispatch({
                        type: UPDATE_DECK_FAILURE
                    })
                }
                else {
                    message.success(datos.message)
                    onSucces()
                    dispatch({
                        type: UPDATE_DECK_SUCCESS,
                        deck: datos.data
                    })
                }
            })
            .catch(error => {
                message.error(Messages.serverConecctionError)
                dispatch({
                    type: UPDATE_DECK_FAILURE,
                })
            })
    }
}


export function deleteMazo(deckId) {
    let user = LocalStorage.loadState().user

    return function (dispatch) {
        dispatch({
            type: DELETE_DECK_REQUEST
        })
        fetch(API_ROUTES.HOME + "/deck/" + user.username + "/" + user.token + "/" +deckId, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
        })
            .then(response => response.json())
            .then(datos => {
                if (datos.error) {
                    message.error(datos.message)

                    dispatch({
                        type: DELETE_DECK_FAILURE
                    })
                }
                else {
                    dispatch({
                        deckId: deckId,
                        type: DELETE_DECK_SUCCESS
                    })
                    
                }
            })
            .catch(error => {
                message.error(Messages.serverConecctionError)
                dispatch({
                    type: DELETE_DECK_FAILURE,
                })
            })
    }
}
