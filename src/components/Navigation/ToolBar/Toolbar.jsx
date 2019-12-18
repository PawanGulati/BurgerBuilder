import React from 'react'
import classes from './ToolBar.module.css'

import Logo from '../../Logo/Logo'
import NavItems from '../NavigationItems/NavigationItems'

export default props => 
    <header className={classes.ToolBar}>
        <div style={{flex:1}}>Menu</div>
        <Logo/>
        <nav>
            <NavItems/>
        </nav>
    </header>
