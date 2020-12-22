import types from "./randomListTypes";

export const addItem = (length = 10) => ({ type: types.ADD_ITEM, length });
export const removeItem = () => ({ type: types.REMOVE_ITEM });
