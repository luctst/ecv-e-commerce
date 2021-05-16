export const getUserCategories = (state) => {
    if(!state.users || !state.users.connected || !state.category || !state.category.length) return [];
    return state.category.filter(c => c.userId === state.users.connected.userId)
};