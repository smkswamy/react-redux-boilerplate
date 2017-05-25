import { fromJS } from 'immutable';
import * as ActionConstants from '../constants/ActionConstants';

const initialState = {
    username : '',
    password : ''
};

const reducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch(action) {
        case ActionConstants.LOGIN_OPTIONS:
            return state.merge(payload);
    }
};

export default reducer;