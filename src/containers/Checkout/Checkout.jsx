import React, { Component } from 'react'
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary'
import { Route } from 'react-router-dom'
import Spinner from '../../components/UI/Spinner/Spinner';

export default class extends Component {

    state={
        ingredients:null
    }

    componentDidMount(){        
        let ingredients = {}
        const query = new URLSearchParams(this.props.location.search)
        for(let param of query.entries()){
            ingredients[param[0]] = +param[1]
        }

        this.setState({ingredients:ingredients})
    }

    CancelCheckoutHandler = () =>{
        this.props.history.goBack()        
    }

    ContinueCheckoutHandler = () =>{
        this.props.history.push(this.props.match.path + '/contact-data')        
    }

    render() {
        let checkSummry = <Spinner/>
        if(this.state.ingredients){
            checkSummry=<CheckoutSummary 
            ingredients={this.state.ingredients} 
            cancelClicked={this.CancelCheckoutHandler} 
            continueClicked={this.ContinueCheckoutHandler}/>
        }

        return (
            <div>
                {checkSummry}
                <Route path={this.props.match.path + '/contact-data'} render={()=><h1>Contact Form</h1>}/> 
            </div>
        )
    }
}
