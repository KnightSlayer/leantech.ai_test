import { useState, useCallback, useRef } from "react";

const useDebounce = (callback, delay) => {
  const [lastCalledAt, setLastCalledAt] = useState(0);

  return () => {
    const now = new Date();
    if (now - lastCalledAt < delay) return;

    setLastCalledAt(now);
    callback();
  };
};

// улучшенная версия с мемоизацией
const useDebounce1 = (callback, delay) => {
  const lastCalledAtRef = useRef();

  const memoizedCb = useCallback(() => {
    const now = new Date();
    const lastCalledAt = lastCalledAtRef.current || 0;
    if (now - lastCalledAt < delay) return;

    lastCalledAtRef.current = now;
    callback();
  }, [callback, delay]);

  return memoizedCb;
};

export default useDebounce1;
