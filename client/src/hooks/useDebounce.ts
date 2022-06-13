import { useState, useEffect } from "react";

export default function useDebounce(value: string, delay: number) {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const setValue = setTimeout(() => setDebounceValue(value), delay);

    return () => clearTimeout(setValue);
  }, [value, delay]);

  return debounceValue;
}
