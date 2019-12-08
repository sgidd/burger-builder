import React from 'react';

import modalClasses from './Modal.css';

const modal = (props) => (
    <div className={modalClasses.Modal}>
        {props.children}
    </div>
);

export default modal;