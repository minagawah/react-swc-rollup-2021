import React, { useEffect, useState } from 'react';

export const getScreenSize = () => ({
  width: window.innerWidth || 0,
  height: window.innerHeight || 0,
});

export const useDeviceSize = defaultSize => {
  const [size, setSize] = useState(defaultSize || getScreenSize());

  useEffect(() => {
    const handler = () => {
      setSize(getScreenSize());
    };
    window.addEventListener('resize', handler);

    handler();

    return () => window.removeEventListener('resize', handler);
  }, []);

  return size;
};
