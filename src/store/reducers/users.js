import actionsTypes from '../actions/types';

const store = {
    connected: null
};

function usersReducers(state = { ...store }, action) {
    switch (action.type) {
        case actionsTypes.users.POPULATE_USER:
            state.connected = action.data;
            return state;
        default:
            return state;
    }
}

export default usersReducers;