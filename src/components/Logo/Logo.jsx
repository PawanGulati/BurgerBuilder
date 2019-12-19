import React from 'react'

import BurgerLogo from '../../assets/images/burger-logo.png'
import classes from './Logo.module.css'

export default props => 
    <div className={classes.Logo} style={{height:props.hgt}}>
        <img src={BurgerLogo} alt=' Logo '/>
    </div>
