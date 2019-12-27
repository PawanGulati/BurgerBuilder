import * as actionTypes from './actionTypes'

export const addIngr = (name) => {
    return{
        type:actionTypes.ADDINGR,
        ingrName:name
    }
}

export const remvIngr = (name) => {
    return{
        type:actionTypes.REMVINGR,
        ingrName:name
    }
}