import * as actionTypes from './action'

const initialState = {
    ingredients:{
        bacon:0,
        cheese:0,
        meat:0,
        salad:0
    },
    totalPrice:4
}

export default (state=initialState,action) => {
    switch (action.type) {
        case actionTypes.ADDINGR:
            return{
                ...state,
                    ingredients:{...state.ingredients,
                        [action.ingrName]:state.ingredients[action.ingrName] + 1
                    }    
                }
            break;
        case actionTypes.REMVINGR:
            return{
                ...state,
                    ingredients:{...state.ingredients,
                        [action.ingrName]: state.ingredients[action.ingrName] ? state.ingredients[action.ingrName] - 1 : 0
                    }                
            }
            break;
        default:
            return state
            break;
    }
}