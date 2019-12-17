import React  from 'react'

import BurgerIngredients from './BurgerIngredients/BurgerIngredients.components'
import classes from './Burger.module.css'

export default ({ingredients}) =>{
    let ArrayIngredients = Object.keys(ingredients).map(ing =>{
        return [...Array(ingredients[ing])].map((_ , i) => {
            return <BurgerIngredients type={ing} key={ing+i} />
        })
    }).reduce((arr,el)=>{
        return arr.concat(el)
    },[])

    if(ArrayIngredients.length === 0){
        ArrayIngredients = <p>Please start adding somethin' </p>
    }     

    return(
        <div className={classes.Burger}>
            <BurgerIngredients type='bread-top' />
            {ArrayIngredients} 
            <BurgerIngredients type='bread-bottom' />
        </div> 
    )    

}

    