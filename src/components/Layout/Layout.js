import React from 'react';

import Aux from '../../hoc/Auxillary';
import layoutClasses from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';


const layout = (props) => (
    <Aux>
        <Toolbar />
        <main className={layoutClasses.Content}>
            {props.children}
        </main>
    </Aux>
);

export default layout;