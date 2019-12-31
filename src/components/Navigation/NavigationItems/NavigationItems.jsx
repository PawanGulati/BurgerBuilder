import React from 'react'

import NavItem from '../NavigationItem/NavigationItem'
import classes from './NavigationItems.module.css'

export default props => 
        <ul className={classes.NavItems}>
            <NavItem href={'/'}>Home</NavItem>
            <NavItem href={'/orders'}>Orders</NavItem>
        </ul>
//TODO: Active Functionality to be added 