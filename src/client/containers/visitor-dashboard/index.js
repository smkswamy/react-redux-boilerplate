import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../../actions';
import VisitorDashBoard from '../../components/VisitorDashBoard';

export class VisitorDashBoardContainer extends Component {
    render() {
        const { cartState, actions } = this.props;
        return (
            <VisitorDashBoard cartState={cartState} actions={actions} />
        )
    }
}

function mapStateToProps(state) {
    return { cartState : state.dashboard }
}

function mapDispatchToProps(dispatch) {
    return { actions : bindActionCreators(Actions, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(VisitorDashBoardContainer);