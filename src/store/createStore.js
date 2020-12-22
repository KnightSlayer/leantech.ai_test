import { combineReducers, createStore as createReduxStore } from "redux";
import randomList from "./reducers/randomList/randomListReducer";
import tabs from "./reducers/tabs/tabsReducer";

export default (initialState) =>
  createReduxStore(
    combineReducers({
      randomList,
      tabs
    }),
    initialState
  );
