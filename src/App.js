import React, { Component } from 'react';

import Layout from './hoc/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

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
          <BurgerBuilder />
       </Layout>
      </div>
    );
  }
}

export default App;
