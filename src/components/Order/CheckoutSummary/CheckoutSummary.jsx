import React from 'react'

import Burger from '../../Burger/Burger.components'
import Button from '../../UI/Button/Button'

import classes from './CheckoutSummary.module.css'

export default props =>
    <div className={classes.CheckoutSummary}>
        <h1> Seriously, You choose this shit </h1>
        <div style={{margin:'auto'}}>
            <Burger ingredients={props.ingredients}/>
        </div>
        <Button btnType='Danger'>CANCEL</Button>
        <Button btnType='Success'>CONTINUE</Button>  
    </div>
