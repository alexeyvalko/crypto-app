import { useEffect, useState } from 'react';

type UseLocalStorageArgs<InitialValue> = {
  key: string;
  initialValue?: InitialValue;
};

export const useLocalStorage = <InitialValue>({ key, initialValue }: UseLocalStorageArgs<InitialValue>) => {
  const [value, setValue] = useState<InitialValue | null>(() => {
    const valueToSet = initialValue ?? null;
    const item = localStorage.getItem(key);

    return item ? JSON.parse(item) : valueToSet;
  });

  useEffect(() => {
    if (value === null) {
      localStorage.removeItem(key);
    }

    if (value) {
      const rawValue = JSON.stringify(value);

      localStorage.setItem(key, rawValue);
    }
  }, [key, value]);

  return [value, setValue] as [InitialValue, React.Dispatch<React.SetStateAction<InitialValue>>];
};
