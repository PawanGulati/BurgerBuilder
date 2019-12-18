import React from 'react'

import Button from '../../UI/Button/Button'


export default props =>{
    
    let ingredients = Object.keys(props.ingredients).map(ing => {
        return <li key={ing}>{ing} :: {props.ingredients[ing]}</li>
    })

    return <div>
        <h3 style={{textAlign:'center'}}>Your Order</h3>
        <ul>
            {ingredients}
        </ul>
        <p><strong>TotalPrice :: {props.price}</strong></p>
        <p style={{textAlign:'center'}}> Continue for checkout </p>
        <Button btnType='Success' clicked={props.continuePurchase}>CONTINUE</Button>
        <Button btnType='Danger' clicked={props.cancelPurchase}>CANCEL</Button>
    </div>
}
