import React,{Component} from 'react';

import Aux from '../Auxillary/Auxillary';
import layoutClasses from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component{
    state= {
        showSideDrawer :false,
    }

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer :false});
    }

    sideDrawerToggleHandler = () => {
        // this.setState({showSideDrawer :true});
        // this.setState({showSideDrawer : !this.state.showSideDrawer});
        this.setState((prevState)=>{
            return {showSideDrawer: !prevState.showSideDrawer};
        });
    }
    render(){
        return (
            <Aux>
            <Toolbar  toggleSideDrawer ={this.sideDrawerToggleHandler}/>
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