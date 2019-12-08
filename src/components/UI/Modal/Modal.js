import React from 'react';

import modalClasses from './Modal.css';

const modal = (props) => (
    <div className={modalClasses.Modal}
        style = {{
            transform : props.showModal ? 'translateY(0)' : 'translateY(-100vh)',
            opacity : props.showModal ? '1' : '0'
        }}>
        {props.children}
    </div>
);

export default modal;