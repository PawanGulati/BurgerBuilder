import React, { Component } from 'react'

import Aux from '../../hoc/Auxillary'
import Toolbar from '../../components/Navigation/ToolBar/Toolbar'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'

export default class extends Component{
    
    state={
        sideDrawer:false
    }

    ToggleSideDrawer = () =>{
        this.setState({
            sideDrawer : !this.state.sideDrawer
        })
    }

    render(){
        return(
            <Aux>
                <SideDrawer clicked={this.ToggleSideDrawer} show={this.state.sideDrawer}/>
                <Toolbar clicked={this.ToggleSideDrawer}/> 
                <main>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
} 
    
