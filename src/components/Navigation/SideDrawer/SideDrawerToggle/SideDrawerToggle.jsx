import React from 'react'
import classes from './DrawerToggle.module.css'

export default props =>
    <div onClick={props.clicked} className={classes.DrawerToggle}>
        <div></div>
        <div></div>
        <div></div>
    </div>
