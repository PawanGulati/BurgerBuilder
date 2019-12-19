import React from 'react'
import classes from './ToolBar.module.css'

import Logo from '../../Logo/Logo'
import NavItems from '../NavigationItems/NavigationItems'
import SideDrawerToggle from '../SideDrawer/SideDrawerToggle/SideDrawerToggle'

export default props => 
    <header className={classes.ToolBar}>
        <div style={{flex:1}} className={classes.MobileOnly}>
            <SideDrawerToggle clicked={props.clicked}/>
        </div>
        <Logo hgt={'90%'}/>
        <nav className={classes.DesktopOnly}>
            <NavItems/>
        </nav>
    </header>
