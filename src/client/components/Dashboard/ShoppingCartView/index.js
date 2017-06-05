import React, { PropTypes } from 'react';
import CatalogItems from '../CatalogItems';
import BasketList from '../BasketList';
import './style.scss';

const ShoppingCartView = ({ cartState, actions }) => {
  const { catalog, basketList, total } = cartState;
  return (
    <div className='shopping-cart-view'>
      <div className='cart-total'>Total: ${total}</div>
      <BasketList catalog={basketList} actions={actions} />
      <div className='product-list-div'>Product List</div>
      <CatalogItems catalog={catalog} actions={actions} />
    </div>
  );
};

ShoppingCartView.propTypes = {
  cartState: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

export default ShoppingCartView;