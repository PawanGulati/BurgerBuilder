import React from 'react'
import classes from './SideDrawer.module.css'

import Logo from '../../Logo/Logo'
import NavItems from '../NavigationItems/NavigationItems'
import BackDrop from '../../UI/BackDrop/BackDrop'

export default props =>{
    return <> 
        <BackDrop clicked={props.clicked} show={props.show}/>
        <div className={`${classes.SideDrawer} ${props.show ? classes.Open : classes.Close}`}>
            <Logo hgt={'11%'}/>
            <nav style={{marginTop:'20px'}}>
                <NavItems/>
            </nav>
        </div>
    </>
} 
