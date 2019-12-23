import React, {Component} from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Auxillary/Auxillary';

// const withErrorHandler = (WrappedComponent) => {
//     return (props) => {
//         return (
//             <Aux>
//                 <Modal showModal>
//                     Something didn't work!
//                 </Modal>

//                 <WrappedComponent {...props} />
//             </Aux>
//         );
//     } //fine to be return (props) as functional but as we are using compdidmount so convert this functional comp into class based
// } 


const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state ={ 
            error :null
        }

        // componentDidMount(){
        //     axios.interceptors.request.use(req => {
        //         this.setState({error:null});
        //         return req;
        //     });

        //     axios.interceptors.response.use(res => res, error => {
        //         this.setState({error :error});
        //     });

        // } This didMount will excute only after the compoennetDidMouth of burgerbuilder is been executed as per the lifecycle hirearchy so we never set the interceptors
        // //that is the reason we will dont see error modal in get request here so change the method to compWillMount

        

        //though componentWillMount will not be  supoorted so you can se contructor instead
        componentWillMount(){
            axios.interceptors.request.use(req => {
                this.setState({error:null});
                return req;
            });

            axios.interceptors.response.use(res => res, error => {
                this.setState({error :error});
            });

        }

        errorConfirmHandler = () => {
            this.setState({error:null});
        }

        render () {
            return (
                <Aux>
                    <Modal showModal = {this.state.error}
                    modalClosed={this.errorConfirmHandler}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>

                    <WrappedComponent {...this.props} />
                </Aux>
            );
        }
    
    } 
}

export default withErrorHandler;