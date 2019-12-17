import React from 'react'

import classes from './BuildControl.module.css'


export default ({label,type,AddIngr,RemoveIngr}) =>
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{label}</div>
        <button className={classes.More} onClick={()=>AddIngr(type)}>Add</button>
        <button className={classes.Less} onClick={()=>RemoveIngr(type)}>Remove</button>
    </div>