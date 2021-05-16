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

export const deleteCategoryById = id => async dispatch => {
    try {
        await api.delete(`/categories/${id}`);
        dispatch({
            type: actionsTypes.category.DELETE_CATEGORY,
            data: id
        })
    } catch(e) {
        console.error(e);
    }
};

export const updateCategory = category => async dispatch => new Promise(((resolve, reject) => {
    api.patch(`/categories/${category.id}`, category)
        .then(() => {
            dispatch({
                type: actionsTypes.category.UPDATE_CATEGORY_BY_ID,
                data: category
            });
            resolve()
        })
        .catch(err => {
            console.error(err);
            reject()
        })
}));

export const addCategory = category => async dispatch => new Promise(((resolve, reject) => {
    api.post(`/categories`, category)
        .then(() => {
            dispatch({
                type: actionsTypes.category.ADD_NEW_CATEGORY,
                data: category
            });
            resolve()
        })
        .catch(err => {
            console.error(err);
            reject()
        })
}));
