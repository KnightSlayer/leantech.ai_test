import React from "react";
import PropTypes from "prop-types";
import useDebounce from "../hooks/useDebounse";

const STR_LEN = 10;
const DEBOUNCE_DELAY = 5000;

const RandomList = ({ items, onAdd, onRemove }) => {
  // всё работает хорошо, но если делать дебаунс тут
  // то при анмаунте таймер теряется. то есть если переключиться
  // на другую вкладку и вернуться обратно, то можно
  // добавить строку сразу же. Решить проблему можно было
  // просто перенеся логику дебаунса а экшн или вообще в редюсер
  // НО я хотел показать, что умею писать хуки :)
  const debouncedOnAdd = useDebounce(onAdd, DEBOUNCE_DELAY);
  const memoizedClickHandler = React.useCallback(
    () => debouncedOnAdd(STR_LEN),
    [debouncedOnAdd]
  );

  return (
    <>
      <div>
        <button onClick={memoizedClickHandler}> Add </button>
        <button onClick={onRemove}> Remove </button>
      </div>
      <ul>
        {items.map((str, index) => (
          <li key={index}>{str}</li>
        ))}
      </ul>
    </>
  );
};

// вообще, если вы используете typescript у себя, то
// он, конечно, ещё лучше <3
RandomList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  onAdd: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired
};

export default React.memo(RandomList);
