import React from 'react'
import classes from './Spinner.module.css'

export default props => 
    // <div className={classes.Loader}>Loading...</div>
    //modified spinner LOL
    <div className={classes.fancySpinner}>
        <div className={classes.ring}></div>
        <div className={classes.ring}></div>
        <div className={classes.dot}></div>
    </div>
