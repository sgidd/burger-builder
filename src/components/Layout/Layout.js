import React from 'react';

import Aux from '../../hoc/Auxillary';
import layoutClasses from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

const layout = (props) => (
    <Aux>
        <Toolbar />
        <SideDrawer />
        <main className={layoutClasses.Content}>
            {props.children}
        </main>
    </Aux>
);

export default layout;