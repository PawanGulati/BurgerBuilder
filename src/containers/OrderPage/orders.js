import React, { Component } from 'react'
import Order from '../../components/Order/Order'

import {connect} from 'react-redux'
import * as actions from '../../store/actions/orders'
import Spinner from '../../components/UI/Spinner/Spinner'

const mapStateToProps = state =>{
    return{
        ing:state.ingredients,
        price:state.totalPrice,
        orders:state.orders
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        ordersFetch : ()=>{dispatch(actions.ordersFetch())},
        // ordersFail : ()=>{dispatch(actions.ordersFail())}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(class extends Component {

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
})
