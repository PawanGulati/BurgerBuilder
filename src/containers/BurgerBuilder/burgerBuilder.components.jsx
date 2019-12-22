import React, { Component, Fragment } from 'react'

import Burger from '../../components/Burger/Burger.components'
import BuildControls from '../../components/Burger/BuildControls/BuildControls.component'
import Modal from '../../components/UI/Modal/Modal.component'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary.component'
import Spinner from '../../components/UI/Spinner/Spinner'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'

import axios from '../../axios-orders'

const INGREDIENTS_COST = {
    salad:1,
    cheese:2,
    meat:4,
    bacon:4
}

export default withErrorHandler(class extends Component{

    state = {
        // ingredients:null,
        ingredients:{
            bacon:0,
            cheese:0,
            meat:0,
            salad:0
        },
        totalPrice:4,
        purchasable:false,
        purchasing:false,
        loading:false,
        error:false
    }   

    componentDidMount(){
        axios.get('/ingredients.json').then(res => {
            this.setState({ingredients:res.data})
        }).catch(err => {
            this.setState({error:true})
        })
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

        const queryParams = []
        for(let i in this.state.ingredients){
            queryParams.push(`${i}=${this.state.ingredients[i]}`)
        }

        this.props.history.push({
            pathname:'/checkout',
            search:'?' + queryParams.join('&')
        })

        // this.setState({loading:true})

        // const order = {
        //     ingredients:this.state.ingredients,
        //     price:this.state.totalPrice,
        //     customer:{
        //         name:'Pawan',
        //         address:{
        //             street:'street1',
        //             zipcode:'test01',
        //             country:'test'
        //         },
        //         email:'test@test.com',
        //     },
        //     delivery:'fastest'
        // }

        // axios.post('/orders.json' , order)
        //     .then(res => {
        //         this.setState({
        //             loading:false,
        //             purchasing:false
        //         })
        //     })
        //     .catch(err =>{
        //         this.setState({
        //             loading:false,
        //             purchasing:false
        //         })
        //     })
    }

    render(){

        let burger = this.state.error ? <p style={{margin:'50% 0 0 20%'}}><strong>ingredients ain't found !!</strong> </p> : <Spinner/>
        let orderSummary = null
        if(this.state.ingredients){
            orderSummary = <OrderSummary price={this.state.totalPrice.toFixed(2)} ingredients= {this.state.ingredients} cancelPurchase={this.CancelPurchasingHandler} continuePurchase={this.ContinuePurchasingHandler}/>
            burger = (
                <Fragment>
                    <div style={{width:'50%',margin:'auto'}}>
                        <Burger ingredients = {this.state.ingredients} />
                    </div>
                    <BuildControls orderIt={this.Purchasing} purchasable={this.state.purchasable} price={this.state.totalPrice} AddIngr={this.AddIngredientsHandler} RemoveIngr={this.RemoveIngredientsHandler} ingredients={this.state.ingredients}/>
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
},axios)