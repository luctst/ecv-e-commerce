import actionsTypes from '../types';

const initialValue = {
    connected: null
};

function usersReducers(state = initialValue, action) {
    switch (action.type) {
        case actionsTypes.users.POPULATE_USER:
            state.connected = action.data;
            return state;
        default:
            return state;
    }
}

export default usersReducers;