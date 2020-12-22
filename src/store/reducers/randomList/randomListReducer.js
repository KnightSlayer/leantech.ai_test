import types from "./randomListTypes";

/*
из тонких моментов тут то, что хотя сейчас этот код работает хорошо,
но если появится динамическое обновление редюсеров, например при код сплитинге,
то состояние может стать другим. В таком случает сгенерированную строку (или индекс при удалении)
лучше передавать параметром
*/
const ACTION_HANDLERS = {
  [types.ADD_ITEM]: (state, { length }) => {
    let newStr = btoa(Math.random()).replace(/[^a-zA-Z]/g, "") || "a";
    while (newStr.length < length) {
      newStr += newStr;
    }
    newStr = newStr.slice(0, length);

    return [...state, newStr];
  },
  [types.REMOVE_ITEM]: (state) => {
    if (!state.length) return state;

    const randomIndex = Math.floor(Math.random() * state.length);
    const newState = [...state];
    newState.splice(randomIndex, 1);

    return newState;
  }
};

const initialState = [];

export default (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
};
