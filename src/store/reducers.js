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
        default:
            return state
    }
}