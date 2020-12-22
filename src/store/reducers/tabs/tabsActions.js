import types from "./tabsTypes";

export const selectTab = (id) => ({
  type: types.SELECT,
  id
});
