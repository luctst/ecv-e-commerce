import actionsTypes from '../types';
import api from '../../api';

export function fetchAllCategory() {
    return async function (dispatch) {
        const { data } = await api.get('/categories');
        return dispatch({
            type: actionsTypes.category.GET_ALL_CATEGORIES,
            data: data
        })
    }
}

export function addNewCategory (newCategory) {
    return {
        type: actionsTypes.category.ADD_NEW_CATEGORY,
        data: newCategory
    }
}