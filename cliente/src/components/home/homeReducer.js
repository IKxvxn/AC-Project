import * as Acciones from '../home/homeActions'
import * as Generator from '../../assets/generator'

const DEFAULT_STATE = {
    decks: [],
    isLoading: false
}

const homeReducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case Acciones.CREATE_DECK_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case Acciones.CREATE_DECK_FAILURE:
            return {
                ...state,
                isLoading: false
            }
        case Acciones.CREATE_DECK_SUCCESS:
            return {
                ...state,
                isLoading: false,
                decks: [...state.decks, action.deck]
            }
        default:
            return state

    }

}


export default homeReducer