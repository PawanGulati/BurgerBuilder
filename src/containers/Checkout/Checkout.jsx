import React, { Component } from 'react'
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary'
import { Route } from 'react-router-dom'
import Spinner from '../../components/UI/Spinner/Spinner';
import ContactData from './ContactData/ContactData';

//Implementin' REDUX to project
import {connect} from 'react-redux'
import * as orderAction from '../../store/actions/orders'

const mapStateToProps = state =>{
    return{
        ing : state.ingredients,
        purchased:state.purchased
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        formVisible:()=>{dispatch(orderAction.formVisible())},
        purchaseInit:()=>{dispatch(orderAction.purchaseInit())}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(class extends Component {

    // componentDidMount(){        
        // let ingredients = {}
        // let price=null
        // const query = new URLSearchParams(this.props.location.search)
        // for(let param of query.entries()){
        //     if(param[0] === 'price'){
        //         price = +param[1]
        //     }
        //     else ingredients[param[0]] = +param[1]
        // }

        // this.setState({ingredients:ingredients,price:price})
    // }

    CancelCheckoutHandler = () =>{
        this.props.history.goBack()        
    }

    ContinueCheckoutHandler = () =>{
        this.props.formVisible()
        this.props.purchaseInit()
        this.props.history.push(this.props.match.path + '/contact-data')        
    }

    render() {
        let checkSummary = <Spinner/> 
        if(this.props.ing){
            checkSummary=<CheckoutSummary 
            ingredients={this.props.ing} 
            cancelClicked={this.CancelCheckoutHandler} 
            continueClicked={this.ContinueCheckoutHandler}/>
        }

        return (
            <div>
                {checkSummary}
                <Route path={this.props.match.path + '/contact-data'} component={ContactData}/> 
            </div>
        )
    }
})