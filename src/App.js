import React, { Component } from 'react';

import Layout from './hoc/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';

import { Route, Switch} from 'react-router-dom';


class App extends Component {

  //215 -adding to test removal of in terceptors
  // state ={
  //   show: true
  // }

  // componentDidMount () {
  //   setTimeout( () => {
  //     this.setState({show: false});
  //   }, 5000); // removing bugerbulider hence compwillunmount of witherrohandler will execute
  // }
 //215 end and one line below
  render() {
    return (
      <div>
       <Layout>
          {/* {this.state.show ? <BurgerBuilder /> : null}          */}
          {/* <BurgerBuilder />
          <Checkout /> */}

          {/* 252 . setting up routing and routes */}

          <Switch>
            <Route path="/checkout" component={Checkout} />
            <Route path="/" exact component={BurgerBuilder} />
          </Switch>
          

       </Layout>
      </div>
    );
  }
}

export default App;
