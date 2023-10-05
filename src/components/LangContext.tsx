import React, { useState, useMemo } from 'react';
import { Lang } from '../types/Lang';

type Props = {
  children: React.ReactNode;
}

export const LangContext = React.createContext({
  lang: Lang.EN,
  setLang: (lang: Lang) => {},
});

export const LangProvider: React.FC<Props> = ({ children }) => {
  const [lang, setLang] = useState(Lang.EN);

  const value = useMemo(() => ({
    lang,
    setLang,
  }), [lang])

  return (
    <LangContext.Provider value={value}>
      {children}
    </LangContext.Provider>
  );
}
