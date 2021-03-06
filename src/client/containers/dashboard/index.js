import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../../actions';
import DashBoard from '../../components/Dashboard';

export class DashBoardContainer extends Component {
    render() {
        const { cartState, actions } = this.props;
        return (
            <DashBoard cartState={cartState} actions={actions} />
        )
    }
}

function mapStateToProps(state) {
    return { cartState : state.dashboard }
}

function mapDispatchToProps(dispatch) {
    return { actions : bindActionCreators(Actions, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(DashBoardContainer);