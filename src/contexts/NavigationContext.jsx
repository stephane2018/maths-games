import { createContext, useContext, useState, useCallback } from 'react';

const NavigationContext = createContext(null);

export function NavigationProvider({ children }) {
  const [modalStack, setModalStack] = useState([
    { id: 'home', screen: 'Home', data: {}, isFullPage: false },
  ]);
  const [sharedState, setSharedState] = useState({});

  const push = useCallback((screen, data = {}, isFullPage = false) => {
    setSharedState(prev => ({ ...prev, ...data }));
    setModalStack(prev => [
      ...prev,
      { id: `${screen}-${Date.now()}`, screen, data, isFullPage },
    ]);
  }, []);

  const pop = useCallback(() => {
    setModalStack(prev => {
      if (prev.length <= 1) return prev;
      return prev.slice(0, -1);
    });
  }, []);

  const goHome = useCallback(() => {
    setModalStack([
      { id: 'home', screen: 'Home', data: {}, isFullPage: false },
    ]);
    setSharedState({});
  }, []);

  const updateSharedState = useCallback((data) => {
    setSharedState(prev => ({ ...prev, ...data }));
  }, []);

  const currentView = modalStack[modalStack.length - 1];
  const canGoBack = modalStack.length > 1;

  return (
    <NavigationContext.Provider value={{
      push,
      pop,
      goHome,
      sharedState,
      updateSharedState,
      currentView,
      canGoBack,
      modalStack,
    }}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const ctx = useContext(NavigationContext);
  if (!ctx) throw new Error('useNavigation must be used within NavigationProvider');
  return ctx;
}
