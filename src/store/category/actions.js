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
        type: actionsTypes.category.ADD_CATEGORY,
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
        .then(res => {
            dispatch({
                type: actionsTypes.category.UPDATE_CATEGORY,
                data: res.data
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
        .then(res => {
            dispatch({
                type: actionsTypes.category.ADD_CATEGORY,
                data: res.data
            });
            resolve()
        })
        .catch(err => {
            console.error(err);
            reject()
        })
}));
