import React from 'react'

import classes from './Input.module.css'

export default props =>{
    let inputElem = null

    switch(props.ElemType){
        case('input') : inputElem = <input  className={classes.Input} {...props.ElemConfig} value={props.value}/>
        break
        case('text-area') : inputElem = <textarea  className={classes.Input} {...props.ElemConfig} value={props.value}/>
        break
        case('select') : inputElem = (<select className={classes.Input} >{props.ElemConfig.option.map(opt => <option key={opt.value} value={opt.value}>{opt.dispValue}</option>)}</select>)
        break
        default: inputElem=null
    }

    return inputElem
}