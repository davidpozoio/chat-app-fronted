import { ChangeEventHandler, useState } from "react";
import { useAppStore } from "../store/store";

export const useDebounceTextField = (time: number) => {
  const setMessage = useAppStore((state) => state.setMessage);
  const [key, setKey] = useState<number | undefined>(undefined);

  const handleChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    const inputValue = e.target.value.trim(); // Trim whitespace

    clearTimeout(key);

    const newKey = setTimeout(() => {
      setMessage(inputValue);
    }, time);

    setKey(newKey);
  };

  return { key, handleChange };
};
