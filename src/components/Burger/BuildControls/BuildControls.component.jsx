import React, { Fragment } from 'react'

import ButtonControl from './BuildControl/BuildControl.component'

import classes from './BuildControls.module.css'

export default ({ingredients,AddIngr,RemoveIngr,price,purchasable,orderIt}) =>{
    
    return <div className={classes.BuildControls}>
        <p>Current Price :: <strong>{price}</strong></p>
        {Object.keys(ingredients).map((ing,i) => {
            return <ButtonControl AddIngr={AddIngr} RemoveIngr={RemoveIngr} key={ing+i} label={ing.toUpperCase()} type={ing}/>
        })}
        <button className={classes.OrderButton} disabled = {!purchasable} onClick={orderIt}>ORDER NOW</button>
    </div>
} 
