import { fromJS } from 'immutable';
import * as ActionConstants from '../constants/ActionConstants';

const initialState = {
    username : '',
    password : ''
};

const login = (state = initialState, action) => {
    const { type, payload } = action;

    switch(type) {
        case ActionConstants.LOGIN_OPTIONS:
            return Object.assign({}, state, payload);
        default :
            return state;
    }
};

export default login;