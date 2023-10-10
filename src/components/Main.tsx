import { useReducer } from "react";
import { Lang } from "../types/Lang";

type Action = { type: 'decrease'}
            | { type: 'increase' }
            | { type: 'add', payload: number }
            | { type: 'setLang', payload: Lang };

interface State {
  amount: number;
  lang: Lang;
}

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'decrease':
      return {
        ...state,
        amount: state.amount - 1,
      };

    case 'increase':
      return {
        ...state,
        amount: state.amount + 1,
      };

    case 'add':
      return {
        ...state,
        amount: state.amount + (action.payload || 0),
      };

    case 'setLang':
      return {
        ...state,
        lang: action.payload,
      };
  
    default:
      return state;
  }
}

const initialState: State = {
  amount: 0,
  lang: Lang.EN,
}

export const Main = () => {
  const [{amount }, dispatch] = useReducer(reducer, initialState);

  const decrease = () => dispatch({type: 'decrease'});
  const increase = () => dispatch({type: 'increase'});

  return (
    <main>
      <button onClick={decrease}>-</button>
      {amount}
      <button onClick={increase}>+</button>
    </main>
  )
}
