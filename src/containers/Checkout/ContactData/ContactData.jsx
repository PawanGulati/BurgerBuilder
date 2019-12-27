import React, { Component } from 'react'
import ContactForm from '../../../components/Order/ContactForm/ContactForm'
import Modal from '../../../components/UI/Modal/Modal.component'
import axios from '../../../axios-orders'
import Spinner from '../../../components/UI/Spinner/Spinner'

//Implementin' REDUX to project
import {connect} from 'react-redux'
// import * as actionTypes from '../../store/action'

const mapStateToProps = state => {
    return{
        ing:state.ingredients,
        price:state.totalPrice
    }
}

export default connect(mapStateToProps)(class extends Component {

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
        loading:false,
        formVisible:true
    }

    cancelFormHandler = ()=>{
        this.setState({formVisible:false})
        this.props.history.goBack()
    }

    ContinueFormHandler = e =>{
        // e.preventDefault()
        this.setState({loading:true})

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
        

        axios.post('/orders.json' , order)
            .then(res => {
                this.setState({
                    loading:false
                })
                this.props.history.push('/')
            })
            .catch(err =>{
                this.setState({
                    loading:false
                })
            })
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

    render() {

        let form = <Spinner/>
        if(!this.state.loading){
            form = <ContactForm orderForm={this.state.orderForm} inputChange={this.inputChangeHandler} continueOrder={this.ContinueFormHandler}/>
        }

        return (
            <Modal show={this.state.formVisible} backDropClicked={this.cancelFormHandler}>
                {form}
            </Modal>
        )
    }
})