import React from 'react';
import { PostForm } from './PostForm';

export const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Create a post</h1>

      <PostForm />
    </div>
  );
};
