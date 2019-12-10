import React,{Component} from 'react';

import modalClasses from './Modal.css';
import Aux from '../../../hoc/Auxillary/Auxillary';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {

    componentWillUpdate (){
        console.log('[Modal] compwillupdate()');
    }

    shouldComponentUpdate(nextProps, nextState){
        return nextProps.showModal !== this.props.showModal;
    }

    render() {
        return (
            <Aux>
                <Backdrop showModal={this.props.showModal} clicked={this.props.modalClosed}/>
                <div className={modalClasses.Modal}
                style = {{
                    transform : this.props.showModal ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity : this.props.showModal ? '1' : '0'
                }}>
                {this.props.children}
                </div>
            </Aux>
        );
    }
} 

export default Modal;


// const modal = (props) => (
//     <Aux>
//         <Backdrop showModal={props.showModal} clicked={props.modalClosed}/>
//         <div className={modalClasses.Modal}
//         style = {{
//             transform : props.showModal ? 'translateY(0)' : 'translateY(-100vh)',
//             opacity : props.showModal ? '1' : '0'
//         }}>
//         {props.children}
//         </div>
//     </Aux>
// );

// export default modal;