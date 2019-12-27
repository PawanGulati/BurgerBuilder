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

export const initIngr = () => {
    return dispatch =>{
        axios.get('/ingredients.json').then(res => {
            dispatch(setIngr(res.data))
        }).catch(err =>{
            dispatch(FetchFailed())
        })
    }
}