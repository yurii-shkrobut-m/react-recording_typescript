import React, { useState } from 'react';

export const PostForm: React.FC = () => {
  const [userId, setUserId] = useState(0);
  const [title, setTitle] = useState('Post 1');
  const [isBodyShown, setIsBodyShown] = useState(false);

  const handleTilteChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
    // setIsBodyShown(false);
  };

  return (
    <form action="/api/posts" method="POST">
      <label className="field">
        Title:&nbsp;&nbsp;

        <input
          type="text"
          value={title}
          onChange={handleTilteChange}
        />
      </label>

      <div className="field">
        <label htmlFor="user-id">User: </label>

        <select 
          id="user-id" 
          required 
          value={userId}
          onChange={event => setUserId(+event.target.value)}
        >
          <option value="0" disabled>Please choose a user</option>

          <option value="1">Leanne Graham</option>
          <option value="2">Ervin Howell</option>
          <option value="3">Clementine Bauch</option>
          <option value="4">Patricia Lebsack</option>
          <option value="5">Chelsey Dietrich</option>
        </select>

        {userId}
      </div>

      <label className="field">
        <input
          type="checkbox"
          checked={isBodyShown}
          onChange={event => setIsBodyShown(event.target.checked)}
        />
        I want to enter post text
      </label>

      {isBodyShown && (
        <textarea 
          className="field" 
          value={title}
          onChange={event => setTitle(event.target.value)}
        />
      )}

      <button type="submit">Create</button>
    </form>
  );
};