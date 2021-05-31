import { createContext, useState } from 'react';

const Context = createContext('english');
Context.displayName = 'LanguageStore';
export const LanguageStore = ({children}) => {

  const [ language, setLanguage ]  = useState('english');

  return (
    <Context.Provider
      value={{language, setLanguage}}
    >
      {children}
    </Context.Provider>
  );
};


export default Context;
