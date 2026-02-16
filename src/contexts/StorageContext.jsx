import { createContext, useContext, useEffect } from 'react';
import { storage } from '../systems/StorageManager.js';

const StorageContext = createContext(null);

export function StorageProvider({ children }) {
  useEffect(() => {
    storage.init();
  }, []);

  return (
    <StorageContext.Provider value={storage}>
      {children}
    </StorageContext.Provider>
  );
}

export function useStorage() {
  const ctx = useContext(StorageContext);
  if (!ctx) throw new Error('useStorage must be used within StorageProvider');
  return ctx;
}
