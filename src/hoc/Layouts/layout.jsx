import React, { Component } from 'react'

import Aux from '../../hoc/Auxillary'
import Toolbar from '../../components/Navigation/ToolBar/Toolbar'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'

export default class extends Component{
    
    state={
        sideDrawer:true
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
                <Toolbar/> 
                <main>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
} 
    
