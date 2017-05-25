import * as ActionConstants from '../constants';

export const loginOptions = payload => {
    return {
        type : ActionConstants.LOGIN_OPTIONS,
        payload
    }
}