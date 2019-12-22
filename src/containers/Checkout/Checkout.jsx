import React, { Component } from 'react'
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary'

export default class extends Component {

    state={
        ingredients:{
            bacon:1,
            meat:1,
            cheese:1,
            salad:0
        }
    }

    render() {
        return (
            <div>
                <CheckoutSummary ingredients={this.state.ingredients} />  
            </div>
        )
    }
}
