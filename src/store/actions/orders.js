import * as actionTypes from "./actionTypes";
import axios from "../../axios-orders";

const setIngr = (data) =>{
    return{
        type:actionTypes.INIT_INGR,
        data
    }
}

const FetchFailed = (err) =>{
    return{
        type:actionTypes.FETCH_FAIL_INGR,
        err
    }
}

//Purchasing Page funcS
const setOrder = (orderId,orderData) =>{
    return{
        type:actionTypes.PURCHASE_DONE,
        orderId,
        orderData
    }
}

const failOrder = (err) =>{
    return{
        type:actionTypes.PURCHASE_FAIL,
        err
    }
}

const purchaseLoad = () =>{
    return{
        type:actionTypes.PURCHASE_START
    }
}

//Orders Page funcS
const setOrders = (data) =>{
    return{
        type:actionTypes.ORDERS_FETCH,
        data
    }
}

const ordersFail = (err) =>{
    return{
        type:actionTypes.ORDERS_FAIL,
        err
    }
}

const ordersLoad = ()=>{
    return{
        type:actionTypes.ORDERS_START
    }
}

export const initIngr = () => {
    return dispatch =>{
        axios.get('/ingredients.json').then(res => {
            dispatch(setIngr(res.data))
        }).catch(err =>{
            dispatch(FetchFailed(err))
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
                dispatch(failOrder(err))
            })
    }
}

export const purchaseStart = ()=>{
    return dispatch =>{
        dispatch(purchaseLoad())
    }
}

export const ordersFetch = ()=>{
    return dispatch =>{
        axios.get('/orders.json').then(res => {
            // console.log(res.data);
            const updatedOrders=[] 
            for(let order in res.data){
                let order1 = {...res.data[order]}
                // console.log(order1);
                
                updatedOrders.push({
                    ingredients:{...order1.ingredients},
                    price:order1.price,
                    id:order
                })
            }
            console.log(updatedOrders);
            
            dispatch(setOrders(updatedOrders))
        }).catch(err =>{
            dispatch(ordersFail(err))
        })
    }
}

export const ordersStart = ()=>{
    return dispatch =>{
        dispatch(ordersLoad())
    }
}

export const formVisible = ()=>{
    return{
        type:actionTypes.SUBMIT_DATA
    }
}

export const purchaseInit = ()=>{
    return{
        type:actionTypes.PURCHASE_INIT
    }
}