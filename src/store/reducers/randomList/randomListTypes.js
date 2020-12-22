import { setValuesWithPrefix } from "../../../services/utils";

const prefix = "RL_";

const types = {
  ADD_ITEM: "",
  REMOVE_ITEM: ""
};

setValuesWithPrefix(types, prefix);

export default types;
