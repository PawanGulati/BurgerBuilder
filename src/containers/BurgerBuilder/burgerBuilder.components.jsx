import React, { Component, Fragment } from 'react'

import Burger from '../../components/Burger/Burger.components'
import BuildControls from '../../components/Burger/BuildControls/BuildControls.component'
import Modal from '../../components/UI/Modal/Modal.component'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary.component'
import Spinner from '../../components/UI/Spinner/Spinner'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'

import axios from '../../axios-orders'

import {connect} from 'react-redux'
import * as builderActions from '../../store/actions/burgerBuilder'
import * as orderActions from '../../store/actions/orders'

const mapStateToProps = state => {
    return {
        ing : state.ingredients,
        price: state.totalPrice,
        error:state.error
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        addIngr:(ingrName)=>dispatch(builderActions.addIngr(ingrName)),
        remvIngr:(ingrName)=>dispatch(builderActions.remvIngr(ingrName)),
        initIngr:()=>dispatch(orderActions.initIngr())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(class extends Component{

    state = {
        purchasing:false,
        loading:false,
    }   

    componentDidMount(){
        this.props.initIngr()
    }

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

        // const queryParams = []
        // for(let i in this.props.ing){
        //     queryParams.push(`${i}=${this.props.ing[i]}`)
        // }

        // queryParams.push(`price=${this.props.price}`)

        this.props.history.push('/checkout')
    }

    render(){

        let burger = this.props.error ? <p style={{margin:'20% 0 0 30%'}}><strong>ingredients ain't found !!</strong> </p> : <Spinner/>
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