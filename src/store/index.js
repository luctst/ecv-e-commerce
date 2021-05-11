import { combineReducers } from 'redux';

const store = {
    tasks: {
        todo: [
            "laver voiture",
            "acheter courses"
        ],
        doing: [
            "Coder sale"
        ],
        done: []
    }
}

function handleTasks(state = { ...store }, action) {
    const newStore = { ...state };

    if (action.type === 'SWITCH_TASK') {
        if (action.data.columnIndex !== Object.keys(newStore.tasks).length - 1) {
            const tasksKeys = Object.keys(newStore.tasks);

            newStore.tasks[tasksKeys[action.data.columnIndex + 1]].push(action.data.item);
            newStore.tasks[tasksKeys[action.data.columnIndex]].splice(action.data.itemIndex, 1);

            return newStore;
        }
    }

    return newStore;
}

export const initstore = combineReducers({
    handleTasks
});