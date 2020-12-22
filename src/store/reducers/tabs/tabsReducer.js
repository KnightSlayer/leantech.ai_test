import types from "./tabsTypes";
import tabs from "../../../components/Tabs/tabs";

const ACTION_HANDLERS = {
  [types.SELECT]: (state, { id }) => id
};

const initialState = tabs[0].id;

export default (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
};
