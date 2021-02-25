import * as Acciones from './quizzActions'

const DEFAULT_STATE = {
    quiz: [],
    isCreating: false
}

const homeReducer = (state = DEFAULT_STATE, action) => {
    let updateData

    switch (action.type) {
        case Acciones.CREATE_QUIZZ_REQUEST:
            return {
                ...state,
                isCreating: true
            }
        case Acciones.CREATE_QUIZZ_FAILURE:
            return {
                ...state,
                isCreating: false
            }
        case Acciones.CREATE_QUIZZ_SUCCESS:
            return {
                ...state,
                isCreating: false,
                quiz: action.quiz.filter(question => question.options.length>1)
            }
        default:
            return state

    }

}

export default homeReducer