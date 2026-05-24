import { useEffect, useRef } from 'react';

const isMac = /Mac/i.test(navigator.userAgent);

export const useSearchShortcut = <T extends HTMLElement>() => {
  const ref = useRef<T>(null);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'k' && (isMac ? e.metaKey : e.ctrlKey)) {
        e.preventDefault();
        ref.current?.focus();
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  return ref;
};
