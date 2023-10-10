import React, { useContext } from 'react';
import { DispatchContext, StateContext } from '../Store';
import { Lang } from '../types/Lang';
import { LangContext } from './LangContext';

type Props = {};

export const LangSelector: React.FC<Props> = () => {
  const dispatch = useContext(DispatchContext);
  const { lang } = useContext(StateContext);

  return (
    <select 
      value={lang} 
      onChange={event => {
        dispatch({
          type: 'setLang',
          payload: event.target.value as Lang,
        })
      }}
    >
      <option value={Lang.EN}>English</option>
      <option value={Lang.UA}>Українська</option>
    </select>
  );
}
