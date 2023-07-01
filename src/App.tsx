// #region imports 
import React, { useState } from 'react';

import { Post } from './types/Post';
import { getMaxId, getPreparedPosts } from './services/posts';
import { PostForm } from './components/PostForm';
import { PostList } from './components/PostList';
// #endregion

export const App: React.FC = () => {
  // #region query
  const [query, setQuery] = useState('');

  const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  }
  // #endregion
  // #region posts
  const [posts, setPosts] = useState<Post[]>(getPreparedPosts());

  const addPost = (post: Post) => {
    const newPost = {
      ...post,
      id: getMaxId(posts) + 1,
    };

    setPosts(currentPosts => [newPost, ...currentPosts]);
  };
  // #endregion

  return (
    <div className="section py-5">
      <div className="columns is-mobile">
        <div className="column">
          <h1 className="title">Posts</h1>
        </div>

        <div className="column">
          <input
            type="text"
            className="input is-rounded"
            value={query}
            onChange={handleQueryChange}
          />
        </div>
      </div>

      <PostList posts={posts} />
      {/* <PostForm onSubmit={addPost} /> */}
      </div>
  );
};
