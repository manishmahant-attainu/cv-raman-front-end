import { useEffect, useState } from 'react';

const useConnectionState = () => {

  const [ isOnline, setIsOnline ] = useState(true);

  const handleConnectionChange = () => {
    setIsOnline(window.navigator.onLine);
  };

  useEffect(() => {
    handleConnectionChange();
    window.addEventListener('online', handleConnectionChange);
    window.addEventListener('offline', handleConnectionChange);
    return () => {
      window.removeEventListener('online', handleConnectionChange);
      window.removeEventListener('offline', handleConnectionChange);
    };
  }, [handleConnectionChange]);

  return [ isOnline ];
};

export default useConnectionState;
