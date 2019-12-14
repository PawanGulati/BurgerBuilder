import React, { Component } from 'react'

import classes from './BurgerIngredients.module.css'

export default class extends Component {
    
    render() {
        let ingredient = null
        const {type} = this.props
        const {BreadBottom, BreadTop, Seeds1, Seeds2, Meat, Cheese , Salad, Bacon} = classes
        switch(type){
            case('bread-top'):
                ingredient = (
                    <div className={BreadTop}>
                        <div className={Seeds1}></div>
                        <div className={Seeds2}></div>
                    </div>

                );
                break;
            case('bread-bottom'):
                ingredient = <div className={BreadBottom}></div>
                break
            case('salad'):
                ingredient = <div className={Salad}></div>
                break
            case('bacon'):
                ingredient = <div className={Bacon}></div>
                break
            case('meat'):
                ingredient = <div className={Meat}></div>
                break  
            case('cheese'):
                ingredient = <div className={Cheese}></div>
                break    
            default:
                ingredient=null     

        }
        console.log(ingredient)
        return ingredient
    }
}
