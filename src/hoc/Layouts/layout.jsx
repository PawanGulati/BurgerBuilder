import React from 'react'

import Aux from '../../hoc/Auxillary'

export default ({children}) =>
    <Aux>
        <header>
            <p>ToolBar, BuildDrop, SideDrawer</p>
        </header>
        <main>
            {children}
        </main>
    </Aux>
    
