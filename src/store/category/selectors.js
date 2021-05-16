export const getCategories = state => {
  return state.category
};

export const getUserCategories = state => {
    if(!state.users || !state.users.connected || !state.category || !state.category.length) return [];
    return state.category.filter(c => c.userId === state.users.connected.id)
};

export const getUserCategory = (state, id) => {
    if(!state.users || !state.users.connected || !state.category || !state.category.length) return null;
    return state.category.find(e => e.id == id && e.userId == state.users.connected.id)
};