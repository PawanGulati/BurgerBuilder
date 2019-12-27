import * as actionTypes from '../actions/actionTypes'

const initialState = {
    ingredients:null,
    totalPrice:4,
    error:false,
    orders:[],
    loading:false,
    formVisible:true
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
        case actionTypes.PURCHASE_DONE:
            const order={
                id:action.orderId,
                orderData:action.orderData
            }
            return{
                ...state,
                orders:state.orders.concat(order),
                loading:false,
                formVisible:false
            }    
        case actionTypes.PURCHASE_FAIL:
            return{
                ...state,
                loading:false,
                formVisible:false
            }  
        case actionTypes.PURCHASE_START:
            return{
                ...state,
                loading:true
            }      
        case actionTypes.SUBMIT_DATA:
            return{
                ...state,
                formVisible:true
            }    

        default:
            return state
    }
}