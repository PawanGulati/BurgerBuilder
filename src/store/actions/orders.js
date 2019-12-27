import * as actionTypes from "./actionTypes";
import axios from "../../axios-orders";

const setIngr = (data) =>{
    return{
        type:actionTypes.INIT_INGR,
        data
    }
}

const FetchFailed = () =>{
    return{
        type:actionTypes.FETCH_FAIL_INGR
    }
}

const setOrder = (orderId,orderData) =>{
    return{
        type:actionTypes.PURCHASE_DONE,
        orderId,
        orderData
    }
}

const failOrder = () =>{
    return{
        type:actionTypes.PURCHASE_FAIL
    }
}

const purchaseLoad = () =>{
    return{
        type:actionTypes.PURCHASE_START
    }
}

export const initIngr = () => {
    return dispatch =>{
        axios.get('/ingredients.json').then(res => {
            dispatch(setIngr(res.data))
        }).catch(err =>{
            dispatch(FetchFailed())
        })
    }
}

export const purchaseDone = (orderData) =>{
    return dispatch =>{
        axios.post('/orders.json' , orderData)
            .then(res => {
                dispatch(setOrder(res.data,orderData))
            })
            .catch(err =>{
                dispatch(failOrder())
            })
    }
}

export const purchaseStart = ()=>{
    return dispatch =>{
        dispatch(purchaseLoad())
    }
}

export const formVisible = ()=>{
    return{
        type:actionTypes.SUBMIT_DATA
    }
}