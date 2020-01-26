import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';


class ContactData extends Component {
    state = {
        orderForm : {
            name : {
                elementType : 'input',
                elementConfig : {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                value: '',
                validation : {
                    required : true
                },
                valid: false
            },
            street: {
                elementType : 'input',
                elementConfig : {
                    type: 'text',
                    placeholder: 'Your Street'
                },
                value: '',
                validation : {
                    required : true
                },
                valid: false
            },
            zipcode: {
                elementType : 'input',
                elementConfig : {
                    type: 'text',
                    placeholder: 'ZIP Code'
                },
                value: '',
                validation : {
                    required : true,
                    minLength : 6,
                    maxLength : 6
                },
                valid: false
            },
            country: {
                elementType : 'input',
                elementConfig : {
                    type: 'text',
                    placeholder: 'Your Country'
                },
                value: '',
                validation : {
                    required : true
                },
                valid: false
            },
            email: {
                elementType : 'input',
                elementConfig : {
                    type: 'email',
                    placeholder: 'Your E-Mail'
                },
                value: '',
                validation : {
                    required : true
                },
                valid: false
            },
            deliveryMethod: {
                elementType : 'select',
                elementConfig : {
                    options: [
                        {value: 'fastest', displayValue: 'Fastest'},
                        {value: 'cheapest', displayValue: 'Cheapest'}
                    ]
                },
                value: ''
            }
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({loading: true});
        //console.log(this.props);
        let formData = {};

        for(let formElementIdentifier in this.state.orderForm){
            formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value;
        }

           
        const order ={
            ingredients : this.props.ingredients,
            price : this.props.totalPrice,
            orderData : formData
        }

        axios.post('/orders.json', order)
            .then(response => {
                //console.log(response);
                this.setState({loading: false});
                this.props.history.push('/');
            })
            .catch(error => {
               // console.log(error);
                this.setState({loading: false});
            })

    }

    checkValidity(value, rules){
        let isValid = false; 

        if(rules.required){
            isValid = value.trim() !== "";
        }
        if(rules.minLength){
            isValid = value.length >= rules.minLength;
        }
        if(rules.maxLength){
            isValid = value.length <= rules.maxLength;
        }

        return isValid;
    }

    inputChangeHandler = (event , inputIdentifier) => {
        // console.log(event.target.value);
        const updatedForm = {
            ...this.state.orderForm
        };
        const updatedFormElement  = {
            ...updatedForm[inputIdentifier]
        }
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value , updatedFormElement.validation);
        console.log(updatedFormElement);
        updatedForm[inputIdentifier] = updatedFormElement;
        this.setState({orderForm: updatedForm});
    }
    render(){
        const formElementsArray = [];
        for(let key in this.state.orderForm){
            formElementsArray.push({
                id:key,
                config : this.state.orderForm[key]
            })
        }
        let form = (
            <form onSubmit={this.orderHandler}>
            {/* <Input elementType =".." elementConfig=".." value=".." /> */}
            {
                formElementsArray.map(formElement => (
                    <Input 
                    key={formElement.id}
                    elementType={formElement.config.elementType}
                    elementConfig={formElement.config.elementConfig}
                    value= {formElement.config.value} 
                    changed={ (event) => this.inputChangeHandler(event , formElement.id)}/>
                ))
            }
            <Button btnType="Success" >ORDER</Button>
        </form>
        );

        if(this.state.loading){
            form= <Spinner />;
        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter your Contact Data</h4>
                    
                {form}
              
            </div>
        );
    }
}

export default ContactData;