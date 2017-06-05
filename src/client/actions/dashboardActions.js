import * as ActionConstants from '../constants/ActionConstants';

export const addToCart = (item) => {
    return {
        type: ActionConstants.ADD_TO_CART,
        item
    }
};

export const removeFromCart = (item) => {
    return {
        type: ActionConstants.REMOVE_FROM_CART,
        item
    }
};