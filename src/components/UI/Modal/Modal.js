import React from 'react';

import modalClasses from './Modal.css';
import Aux from '../../../hoc/Auxillary';
import Backdrop from '../Backdrop/Backdrop';

const modal = (props) => (
    <Aux>
        <Backdrop showModal={props.showModal} clicked={props.modalClosed}/>
        <div className={modalClasses.Modal}
        style = {{
            transform : props.showModal ? 'translateY(0)' : 'translateY(-100vh)',
            opacity : props.showModal ? '1' : '0'
        }}>
        {props.children}
        </div>
    </Aux>
);

export default modal;