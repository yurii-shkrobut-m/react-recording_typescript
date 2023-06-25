import React, { useState } from 'react';

export const App = () => {
  const [history, setHistory] = useState<number[]>([]);
  const [count, setCount] = useState(0);
  const [query, setQuery] = useState('');

  function saveCount(value: number) {
    setCount(value);
    setHistory(currentHistory => [...currentHistory, value]);
  }

  const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  return (
    <div className="App">
      <h1>Mate academy {count} </h1>

      <div className="box">
        <input 
          type="text" 
          onChange={handleQueryChange}
        />

        {query}
      </div>

      <div className="box">
        <button onClick={() => saveCount(count - 1)}>-</button>
        {count}
        <button onClick={() => saveCount(count + 1)}>+</button>
      </div>

      <div className="box">
        {history.join(', ') || 'No history yet'}
      </div>
    </div>
  );
};
