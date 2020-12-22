import createStore from "./createStore";

// из этого файла store доступен везде. мне такой
// вариант нравиться гораздо больше, чем скажем
// пробрасывать его через контекст или использовать
// хук useDispatch
export default createStore(window.__INITIAL_STATE__);
