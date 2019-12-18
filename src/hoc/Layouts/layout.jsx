import React from 'react'

import Aux from '../../hoc/Auxillary'
import Toolbar from '../../components/Navigation/ToolBar/Toolbar'

export default ({children}) =>
    <Aux>
        <Toolbar/> 
        <main>
            {children}
        </main>
    </Aux>
    
