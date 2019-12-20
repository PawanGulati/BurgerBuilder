import React, { Component } from 'react'

import Modal from '../../components/UI/Modal/Modal.component'
import axios from '../../axios-orders'

export default function withErrorHandler(WrappedComponent,axios){
    return class extends Component{
        state={
            error:null
        }

        componentDidMount(){
            axios.interceptors.response.use(res => res,error => {
                this.setState({error})
            })

            axios.interceptors.request.use(req => {
                this.setState({error:null})
                return req
            })
        }

        errorConformed = () =>{
            this.setState({error:null})
        }

        render(){
            return (                
                <>
                    <Modal show={this.state.error} backDropClicked={this.errorConformed}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props}/>
                </>
            )
        }
    }
}
