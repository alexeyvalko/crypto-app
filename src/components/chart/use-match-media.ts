import { useEffect, useRef, useState } from 'react';

export const useMatchMedia = (mediaQuery: string): boolean => {
  const [toggleChange, setToggleChange] = useState<boolean>(false);
  const matchMediaRef = useRef<MediaQueryList | null>(null);

  useEffect(() => {
    matchMediaRef.current = window.matchMedia(mediaQuery);
    const initialMatch = matchMediaRef.current.matches;

    if (initialMatch) {
      setToggleChange(true);
    } else {
      setToggleChange(false);
    }

    const handleChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        setToggleChange(true);
      } else {
        setToggleChange(false);
      }
    };

    matchMediaRef.current?.addEventListener('change', handleChange);

    return () => {
      matchMediaRef.current?.removeEventListener('change', handleChange);
    };
  }, [mediaQuery]);

  return toggleChange;
};

export default useMatchMedia;
