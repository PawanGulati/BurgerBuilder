import React, { Component, Fragment } from 'react'

import Burger from '../../components/Burger/Burger.components'
import BuildControls from '../../components/Burger/BuildControls/BuildControls.component'
import Modal from '../../components/UI/Modal/Modal.component'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary.component'
import Spinner from '../../components/UI/Spinner/Spinner'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'

import axios from '../../axios-orders'

import {connect} from 'react-redux'
import * as actionTypes from '../../store/action'


const mapStateToProps = state => {
    return {
        ing : state.ingredients,
        price: state.totalPrice,
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        addIngr:(ingrName)=>dispatch({type:actionTypes.ADDINGR,ingrName}),
        remvIngr:(ingrName)=>dispatch({type:actionTypes.REMVINGR,ingrName}),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(class extends Component{

    state = {
        purchasing:false,
        loading:false,
        error:false
    }   

    // componentDidMount(){
        // axios.get('/ingredients.json').then(res => {
        //     this.setState({ingredients:res.data})
        // }).catch(err => {
        //     this.setState({error:true})
        // })
    // }

    IsItPurchasable = () =>{
        return this.props.price !== 4 
    } 

    Purchasing = ()=>{
        this.setState({purchasing:true})
    }

    CancelPurchasingHandler = () =>{
        this.setState({purchasing:false})
    }

    ContinuePurchasingHandler = ()=> {

        const queryParams = []
        for(let i in this.props.ing){
            queryParams.push(`${i}=${this.props.ing[i]}`)
        }

        queryParams.push(`price=${this.props.price}`)

        this.props.history.push({
            pathname:'/checkout',
            search:'?' + queryParams.join('&')
        })
    }

    render(){

        let burger = this.state.error ? <p style={{margin:'50% 0 0 20%'}}><strong>ingredients ain't found !!</strong> </p> : <Spinner/>
        let orderSummary = null
        if(this.props.ing){
            orderSummary = <OrderSummary price={this.props.price.toFixed(2)} ingredients= {this.props.ing} cancelPurchase={this.CancelPurchasingHandler} continuePurchase={this.ContinuePurchasingHandler}/>
            burger = (
                <Fragment>
                    <div style={{width:'50%',margin:'auto'}}>
                        <Burger ingredients = {this.props.ing} />
                    </div>
                    <BuildControls orderIt={this.Purchasing} purchasable={this.IsItPurchasable()} price={this.props.price} AddIngr={this.props.addIngr} RemoveIngr={this.props.remvIngr} ingredients={this.props.ing}/>
                </Fragment>
            )
        }
        if(this.state.loading){
            orderSummary = <Spinner/>
        }

        return <div>
            <Modal show={this.state.purchasing} backDropClicked={this.CancelPurchasingHandler}>
                {orderSummary}
            </Modal>
            {burger}
        </div>
    }
},axios))