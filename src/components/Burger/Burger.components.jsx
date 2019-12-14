import React  from 'react'

import BurgerIngredients from './BurgerIngredients/BurgerIngredients.components'
import classes from './Burger.module.css'

console.log(classes)

export default props =>
    <div className={classes.Burger}>
        <BurgerIngredients type='bread-top' />
        <BurgerIngredients type='cheese' />
        <BurgerIngredients type='bacon' />
        <BurgerIngredients type='cheese' />
        <BurgerIngredients type='bread-bottom' />
    </div>
    