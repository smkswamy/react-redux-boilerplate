import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../../actions';
import { Link } from 'react-router-dom';
import Login from '../../components/Login';

export class LoginContainer extends Component {
    render() {
        const { loginState, actions } = this.props;
        return (
            <Login loginState={loginState} actions={actions}/>
        )
    }
}

function mapStateToProps(state) {
    return { loginState : state.login }
}

function mapDispatchToProps(dispatch) {
    return { actions : bindActionCreators(Actions, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);