import React, { Compoenent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../../actions';

export class LoginContainer extends Compoenent {
    render() {
        return (
            <div>Hello</div>
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