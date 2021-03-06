import React, { Component } from 'react'
import ContactForm from '../../../components/Order/ContactForm/ContactForm'
import Modal from '../../../components/UI/Modal/Modal.component'
import axios from '../../../axios-orders'
import Spinner from '../../../components/UI/Spinner/Spinner'

//Implementin' REDUX to project
import {connect} from 'react-redux'
import * as orderAction from '../../../store/actions/orders'
import { Redirect } from 'react-router-dom'

const mapStateToProps = state => {
    return{
        ing:state.ingredients,
        price:state.totalPrice,
        loading:state.loading,
        formVisible:state.formVisible,
        purchased:state.purchased
    }
}

const mapDispatchToProps = dispatch => {
    return{
        purchaseDone:(orderData)=>{dispatch(orderAction.purchaseDone(orderData))},
        purchaseStart:()=>{dispatch(orderAction.purchaseStart())},
        purchaseInit:()=>{dispatch(orderAction.purchaseInit())}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(class extends Component {

    constructor(props){
        super(props)
        this.props.purchaseInit()
    }

    state = {
        orderForm:{
            name:{
                ElemType:'input',
                ElemConfig:{
                    type:'text',
                    placeholder:'Your Name'
                },
                value:''
            },
            street:{
                ElemType:'input',
                ElemConfig:{
                    type:'text',
                    placeholder:'Street Name'
                },
                value:''
            },
            ZipCode:{
                ElemType:'input',
                ElemConfig:{
                    type:'text',
                    placeholder:'ZIP Code'
                },
                value:''
            },
            email:{
                ElemType:'input',
                ElemConfig:{
                    type:'email',
                    placeholder:'Your Email Address'
                },
                value:''
            },
            deliveryMethod:{
                ElemType:'select',
                ElemConfig:{
                    option:[
                        {
                            value:'fastest',
                            dispValue:'Fast AF'
                        },
                        {
                            value:'slowest',
                            dispValue:'Slowest'
                        },
                    ]
                },
                value:'fastest'
            }
        },
        formVisible:true
    }

    cancelFormHandler = ()=>{
        this.setState({formVisible:false})
        this.props.history.goBack()
    }

    ContinueFormHandler = e =>{
        // e.preventDefault()
        // this.setState({loading:true})
        this.props.purchaseStart()

        const order = {
            ingredients:this.props.ing,
            price:this.props.price,
            customer:{
                name:this.state.orderForm.name.value,
                address:{
                    street:this.state.orderForm.street.value,
                    zipcode:this.state.orderForm.ZipCode.value,
                },
                email:this.state.orderForm.email.value,
            },
            deliveryMethod:this.state.orderForm.deliveryMethod.value
        }
        console.log(order);
        
        this.props.purchaseDone(order)

        // axios.post('/orders.json' , order)
        //     .then(res => {
        //         this.setState({
        //             loading:false
        //         })
        //         this.props.history.push('/')
        //     })
        //     .catch(err =>{
        //         this.setState({
        //             loading:false
        //         })
        //     })
    }

    inputChangeHandler = (e,dataKey) =>{
        const updatedOrderForm = {
            ...this.state.orderForm
        }
        const updatedFormEl = {
            ...updatedOrderForm[dataKey]
        }

        updatedFormEl.value = e.target.value
        updatedOrderForm[dataKey] = updatedFormEl

        this.setState({
            orderForm:updatedOrderForm
        })
    }

    //Adding REDIRECT to '/' after success
    

    render() {
        let redirect = null;
        if(this.props.purchased)
        {
            redirect = <Redirect to='/'/>
        }
        let form = <Spinner/>
        if(!this.state.loading){
            form = <ContactForm orderForm={this.state.orderForm} inputChange={this.inputChangeHandler} continueOrder={this.ContinueFormHandler}/>
        }

        return (
            <Modal show={this.props.formVisible} backDropClicked={this.cancelFormHandler}>
                {redirect}
                {form}
            </Modal>
        )
    }
})