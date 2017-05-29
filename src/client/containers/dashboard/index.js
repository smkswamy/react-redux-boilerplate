import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../../actions';

export class DashBoardContainer extends Component {
    render() {
        return (
            <div>DashBoard</div>
        )
    }
}

function mapStateToProps(state) {
    return { loginState : state.login }
}

function mapDispatchToProps(dispatch) {
    return { actions : bindActionCreators(Actions, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(DashBoardContainer);