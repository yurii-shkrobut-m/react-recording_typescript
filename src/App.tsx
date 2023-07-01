// #region imports 
import React, { useMemo, useState } from 'react';

import { Post } from './types/Post';
import { getMaxId, getPreparedPosts } from './services/posts';
import { PostForm } from './components/PostForm';
import { PostList } from './components/PostList';
// #endregion

export const App: React.FC = () => {
  // #region query
  const [count, setCount] = useState(0);
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

    setPosts(currentPosts => [...currentPosts, newPost]);
  };
  // #endregion

  const filteredPosts = useMemo(() => {
    return posts.filter(
      post => post.title.includes(query)
    );
  }, [query, posts]);

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

      <button onClick={() => setCount(x => x + 1)}>{count}</button>
      <PostList posts={filteredPosts} />
      <PostForm onSubmit={addPost} />
    </div>
  );
};
