import * as Acciones from './loginActions'

const DEFAULT_STATE = {
    user: {},
    isLoading: false
}

const loginReducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case Acciones.LOGIN_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case Acciones.CREATE_ACCOUNT_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case Acciones.CREATE_ACCOUNT_FAILURE:
            return {
                ...state,
                isLoading: false
            }
        default:
            return state

    }

}


export default loginReducer