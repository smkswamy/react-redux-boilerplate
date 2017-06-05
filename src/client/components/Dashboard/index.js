import React from 'react';
import './style.scss';
import ShoppingCartView from './ShoppingCartView';

const DashBoard = ({ cartState, actions }) => {
    return (
        <div className='dashboard'>
            <h1 className='dashboard__heading'>Shopping Cart</h1>
            <ShoppingCartView cartState={cartState} actions={actions} />
        </div>
    )
}

export default DashBoard;