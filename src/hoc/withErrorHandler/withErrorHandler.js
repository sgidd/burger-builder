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
        // componentWillMount(){
        //     axios.interceptors.request.use(req => {
        //         this.setState({error:null});
        //         return req;
        //     });

        //     axios.interceptors.response.use(res => res, error => {
        //         this.setState({error :error});
        //     });

        // }

        //215
        //withErrorHandler can be wrapped around multiple cmps in application
        // problem is if we add this HOC to other components we will call componentWillMount again and again
        // bcoz class compoenent we return in this HOC is created everytime we wrp this hoc around any comp
        // so we are actually attching multiple interceptors in our application
        //and we are attching them to the same axios instance
        // so in in routing between multiple pages , old interceptors will still exist when we dont need them 
        // so need to remove the when comp in unmounting
        // to remove them provide reference to the above interceptors means store in prop

        componentWillMount(){
            this.reqInterceptor = axios.interceptors.request.use(req => {
                this.setState({error:null});
                return req;
            });

            this.resInterceptor = axios.interceptors.response.use(res => res, error => {
                this.setState({error :error});
            });

        }

        componentWillUnmount () {
            console.log('will unmount', this.reqInterceptor , this.resInterceptor);
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.resInterceptor);
        }//test this in app.js
        //215 ends

        
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