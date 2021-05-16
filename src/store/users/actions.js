import actionsTypes from '../types';

export function populateUser(data) {
    return {
        type: actionsTypes.users.POPULATE_USER,
        data,
    }
}

export const logUser = data => dispatch => {
    dispatch({
        type: actionsTypes.users.POPULATE_USER,
        data
    })
};