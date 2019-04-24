import React, {Component} from 'react';
import {connect} from 'react-redux';

import Aux from '../Auxiliary/Auxiliary';
import classes from './Layout.module.scss';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDraw/SideDraw';

class Layout extends Component {
    state = {
        showSideDrawer: false
    };

    siderDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return ({
                showSideDrawer: !prevState.showSideDrawer
            });
        })
    };

    siderDrawerClosedHandler = () => {
        this.setState({
            showSideDrawer: false
        })
    };

    render() {
        return (
            <Aux>
                <Toolbar
                    isAuth={this.props.isAuthenticated}
                    drawerToggle={this.siderDrawerToggleHandler}/>
                <SideDrawer
                    isAuth={this.props.isAuthenticated}
                    open={this.state.showSideDrawer}
                    closed={this.siderDrawerClosedHandler}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    };
};

export default connect(mapStateToProps)(Layout);