import * as Acciones from '../../assets/actions'
import * as Generator from '../../assets/generator'

const DEFAULT_STATE = {
    Colores:["#001f3f","#111111","#FF4136","#FF851B","#3D9970","#F012BE","#B10DC9","#0074D9"],
    Color_Actual:"#0074D9"
}

const homeReducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case Acciones.CHANGE_COLOR:
            return{
                ...state,
                Color_Actual:state.Colores[Generator.getRandomArbitrary(0,state.Colores.length)]
            }
        default:
            return state
            
    }

}


export default homeReducer