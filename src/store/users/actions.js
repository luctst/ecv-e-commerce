import actionsTypes from '../types';

export function populateUser(data) {
    return {
        type: actionsTypes.users.POPULATE_USER,
        data,
    }
}