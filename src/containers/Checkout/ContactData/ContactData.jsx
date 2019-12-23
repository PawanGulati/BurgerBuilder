import React, { Component } from 'react'
import ContactForm from '../../../components/Order/ContactForm/ContactForm'
import Modal from '../../../components/UI/Modal/Modal.component'

export default class extends Component {

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
                            value:'cheapest',
                            dispValue:'Cheapest'
                        },
                    ]
                }
            }
        },
        formVisible:true
    }

    

    CancelFormHandler = () =>{
        this.setState({formVisible:false})
        
        this.props.history.goBack()
    }

    render() {

        return (
            <Modal show={this.state.formVisible} backDropClicked={this.CancelFormHandler}>
                <ContactForm orderForm={this.state.orderForm} continueOrder={this.CancelFormHandler} cancelOrder={this.CancelFormHandler}/>
            </Modal>
        )
    }
}
