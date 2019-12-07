import React from 'react';

import Aux from '../../hoc/Auxillary';
import layoutClasses from './Layout.css';


const layout = (props) => (
    <Aux>
        <div>Toolbar, SideDrawer, Backdrop compos goes here</div>
        <main className={layoutClasses.Content}>
            {props.children}
        </main>
    </Aux>
);

export default layout;