import React,{Component} from 'react';

import Aux from '../../hoc/Auxillary';
import layoutClasses from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component{
    state= {
        showSideDrawer :true,
    }

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer :false});
    }
    render(){
        return (
            <Aux>
            <Toolbar />
            <SideDrawer 
             showSideDrawer = {this.state.showSideDrawer}
             closed={this.sideDrawerClosedHandler}/>
            <main className={layoutClasses.Content}>
                {this.props.children}
            </main>
            </Aux>
        );

    }
}

export default Layout;