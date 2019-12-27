import * as actionTypes from '../actions/actionTypes'

const initialState = {
    ingredients:null,
    totalPrice:4,
    error:false
}

const INGREDIENTS_COST = {
    salad:1,
    cheese:2,
    meat:4,
    bacon:4
}

export default (state=initialState,action) => {
    switch (action.type) {
        case actionTypes.ADDINGR:
            return{
                ...state,
                    ingredients:{...state.ingredients,
                        [action.ingrName]:state.ingredients[action.ingrName] + 1,
                    },
                    totalPrice:state.totalPrice + INGREDIENTS_COST[action.ingrName]    
            }
        case actionTypes.REMVINGR:
            return{
                ...state,
                    ingredients:{...state.ingredients,
                        [action.ingrName]: state.ingredients[action.ingrName] ? state.ingredients[action.ingrName] - 1 : 0
                    },
                    totalPrice: state.ingredients[action.ingrName] ? state.totalPrice - INGREDIENTS_COST[action.ingrName] : state.totalPrice,
        }
        case actionTypes.INIT_INGR:
            return{
                ...state,
                ingredients:action.data
            }
        case actionTypes.FETCH_FAIL_INGR:
            return{
                ...state,
                error:true
            }    
        default:
            return state
    }
}