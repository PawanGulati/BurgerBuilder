import React from 'react'

import classes from './Order.module.css'

export default ({order}) =>{
    let ing = Object.keys(order.ingredients)
    
    return(
        <div className={classes.Order}>
            <p><strong>Ingredients :: </strong>{
                ing.map(opt => (
                    <span key={opt} className={classes.OrderIngredient}>{opt} : {order.ingredients[opt]}</span>
                ))
            }</p>
            <p><strong>Price :: ${order.price}</strong></p>
        </div>
    )
}