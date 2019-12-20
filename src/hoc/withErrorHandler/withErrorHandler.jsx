import React, { Component } from 'react'

import Modal from '../../components/UI/Modal/Modal.component'
import axios from '../../axios-orders'

export default function withErrorHandler(WrappedComponent,axios){
    return class extends Component{
        constructor()
        {
            super()
            this.resInterceptor = axios.interceptors.response.use(res => res,error => {
                this.setState({error})
            })

            this.reqInterceptor = axios.interceptors.request.use(req => {
                this.setState({error:null})
                return req
            })
        }
        
        state={
            error:null
        }

        componentWillUnmount(){
            axios.interceptors.request.eject(this.reqInterceptor)
            axios.interceptors.response.eject(this.resInterceptor)
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
