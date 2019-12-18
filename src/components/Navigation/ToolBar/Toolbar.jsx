import React from 'react'
import classes from './ToolBar.module.css'

import Logo from '../../Logo/Logo'

export default props => 
    <header className={classes.ToolBar}>
        <div>Menu</div>
        <Logo/>
        <nav>
            ....
        </nav>
    </header>
