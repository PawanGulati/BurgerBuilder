import React, { Component } from 'react'

import Burger from '../../components/Burger/Burger.components'
import BuildControls from '../../components/Burger/BuildControls/BuildControls.component'
import Modal from '../../components/UI/Modal/Modal.component'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary.component'
import Spinner from '../../components/UI/Spinner/Spinner'

import axios from '../../axios-orders'

const INGREDIENTS_COST = {
    salad:1,
    cheese:2,
    meat:4,
    bacon:4
}

export default class extends Component{

    state = {
        ingredients:{
            cheese:0,
            meat:0,
            bacon:0, 
            salad:0
        },
        totalPrice:4,
        purchasable:false,
        purchasing:false,
        loading:false
    }   

    AddIngredientsHandler = type =>{
        let OldCount = this.state.ingredients[type]
        let NewCount = OldCount + 1
        let UpdatedIngredients = {
            ...this.state.ingredients
        } 
        UpdatedIngredients[type] = NewCount

        let OldPrice = this.state.totalPrice
        let NewPrice = OldPrice + INGREDIENTS_COST[type]

        let purchasable = this.IsItPurchasable(NewPrice)

        this.setState({
            totalPrice:NewPrice,
            ingredients:UpdatedIngredients,
            purchasable
        })        
    }

    RemoveIngredientsHandler = type =>{
        let OldCount = this.state.ingredients[type]
        let NewCount = OldCount - 1
        if(NewCount<0) return
        let UpdatedIngredients = {
            ...this.state.ingredients
        } 
        UpdatedIngredients[type] = NewCount

        let OldPrice = this.state.totalPrice
        let NewPrice = OldPrice - INGREDIENTS_COST[type]

        let purchasable = this.IsItPurchasable(NewPrice)

        this.setState({
            totalPrice:NewPrice,
            ingredients:UpdatedIngredients,
            purchasable
        })
    }

    IsItPurchasable = (price) =>{
        return price !== 4 
    } 

    Purchasing = ()=>{
        this.setState({purchasing:true})
    }

    CancelPurchasingHandler = () =>{
        this.setState({purchasing:false})
    }

    ContinuePurchasingHandler = ()=> {

        this.setState({loading:true})

        const order = {
            ingredients:this.state.ingredients,
            price:this.state.totalPrice,
            customer:{
                name:'Pawan',
                address:{
                    street:'street1',
                    zipcode:'test01',
                    country:'test'
                },
                email:'test@test.com',
            },
            delivery:'fastest'
        }

        axios.post('/orders.json' , order)
            .then(res => {
                this.setState({
                    loading:false,
                    purchasing:false
                })
            })
            .catch(err =>{
                this.setState({
                    loading:false,
                    purchasing:false
                })
            })
    }

    render(){
        let orderSummary = <OrderSummary price={this.state.totalPrice.toFixed(2)} ingredients= {this.state.ingredients} cancelPurchase={this.CancelPurchasingHandler} continuePurchase={this.ContinuePurchasingHandler}/>
        if(this.state.loading){
            orderSummary = <Spinner/>
        }

        return <div>
            <Modal show={this.state.purchasing} backDropClicked={this.CancelPurchasingHandler}>
                {orderSummary}
            </Modal>
            <Burger ingredients = {this.state.ingredients} />
            <BuildControls orderIt={this.Purchasing} purchasable={this.state.purchasable} price={this.state.totalPrice} AddIngr={this.AddIngredientsHandler} RemoveIngr={this.RemoveIngredientsHandler} ingredients={this.state.ingredients}/>
        </div>
    }
} 
