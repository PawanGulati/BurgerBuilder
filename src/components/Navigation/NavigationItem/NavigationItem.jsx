import React from 'react'
import classes from './NavigationItem.module.css'

export default props => 
    <li className={classes.NavItem}><a href='/' >{props.children}</a></li>