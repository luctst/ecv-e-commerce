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

export function updateCategory (categoryId, newCategoryData) {
    return {
        type: actionsTypes.category.UPDATE_CATEGORY_BY_ID,
        data: {
            categoryId,
            newCategoryData,
        }
    }
}