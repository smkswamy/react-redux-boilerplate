import * as ActionConstants from '../constants/ActionConstants';

export const loginOptions = payload => {
    return {
        type : ActionConstants.LOGIN_OPTIONS,
        payload
    }
}