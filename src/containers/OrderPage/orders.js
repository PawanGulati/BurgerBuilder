import React, { Component } from 'react'
import Order from '../../components/Order/Order'

import {connect} from 'react-redux'
import * as actions from '../../store/actions/orders'
import Spinner from '../../components/UI/Spinner/Spinner'

import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
import axios from '../../axios-orders'

const mapStateToProps = state =>{
    return{
        orders:state.orders
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        ordersFetch : ()=>{dispatch(actions.ordersFetch())}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(class extends Component {

    componentDidMount(){
        this.props.ordersFetch()
    }

    render() {
        let orders = <Spinner/>
        if(this.props.orders.length!==0){
            console.log(this.props.orders);
            
            orders=this.props.orders.map(order=>(
                <Order key={order.id} order={order}/>
            ))
        }
        
        return (
            <div>
                {orders}
            </div>
        )
    }
},axios))
