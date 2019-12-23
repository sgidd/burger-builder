import React, { Component } from 'react';

import Layout from './hoc/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

class App extends Component {

  //adding to test removal of in terceptors
  state ={
    show: true
  }

  componentDidMount () {
    setTimeout( () => {
      this.setState({show: false});
    }, 5000); // removing bugerbulider hence compwillunmount of witherrohandler will execute
  }

  render() {
    return (
      <div>
       <Layout>
          {this.state.show ? <BurgerBuilder /> : null}         
       </Layout>
      </div>
    );
  }
}

export default App;
