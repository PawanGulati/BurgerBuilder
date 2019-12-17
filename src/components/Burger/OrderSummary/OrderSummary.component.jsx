import React from 'react'

export default props =>{
    
    let ingredients = Object.keys(props.ingredients).map(ing => {
        return <li>{ing} :: {props.ingredients[ing]}</li>
    })

    return <div>
        <h3 style={{textAlign:'center'}}>Your Order</h3>
        <ul>
            {ingredients}
        </ul>
        <p style={{textAlign:'center'}}> Continue for checkout </p>
    </div>
}
