import { createContext, useState, useCallback } from 'react';

const Context = createContext({});

Context.displayName = 'StoreContext';

export const DataStore = ({children}) => {
  const [ state, setState ] = useState({});

  const updateValues = useCallback((type,payload) => {
    setState((s)=>({...s, [type]:payload}));
  },[]);

  return(
    <Context.Provider
      value={{state,updateValues}}
    >
      {children}
    </Context.Provider>
  );
};

export default Context;
