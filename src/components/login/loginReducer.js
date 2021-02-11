import * as Acciones from './loginActions'

const DEFAULT_STATE = {
    user : {},
    isLoading : false
}

const loginReducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case Acciones.LOGIN_REQUEST:
            return{
                ...state,
                isLoading : true
            }
        default:
            return state
            
    }

}


export default loginReducer