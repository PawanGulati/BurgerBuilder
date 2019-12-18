import React from 'react'

import './Button.css'

export default props => 
    <button onClick={props.clicked} className={`Button ${props.btnType}`}>{props.children}</button>