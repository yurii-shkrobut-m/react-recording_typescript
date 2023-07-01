// #region imports 
import React, { useCallback, useMemo, useState } from 'react';

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
  };
  // #endregion
  // #region posts
  const [posts, setPosts] = useState<Post[]>(getPreparedPosts());

  const filteredPosts = useMemo(() => {
    return posts.filter(post => post.title.includes(query));
  }, [query, posts]);

  const addPost = useCallback((post: Post) => {
    setPosts(currentPosts => {
      const newPost = {
        ...post,
        id: getMaxId(currentPosts) + 1,
      };

      return [...currentPosts, newPost];
    });
  }, []);

  const deletePost = useCallback((postId: number) => {
    setPosts(currentPosts => currentPosts.filter(post => post.id !== postId));
  }, []);

  const updatePost = useCallback((updatedPost: Post) => {
    setPosts(currentPosts => {
      const newPosts = [...currentPosts];
      const index = newPosts.findIndex(post => post.id === updatedPost.id);

      newPosts.splice(index, 1, updatedPost);

      return newPosts;
    });
  }, []);
  // #endregion
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  return (
    <div className="section py-5">
      <div className="columns is-mobile">
        <div className="column">
          <h1 className="title">Posts</h1>
        </div>

        <div className="column">
          <input
            autoFocus
            type="text"
            className="input is-rounded"
            value={query}
            onChange={handleQueryChange}
          />
        </div>
      </div>

      <PostList
        posts={filteredPosts}
        selectedPostId={selectedPost?.id}
        onDelete={deletePost}
        onSelect={setSelectedPost}
      />

      {selectedPost ? (
        <PostForm
          key={selectedPost.id}
          post={selectedPost}
          onSubmit={updatePost}
          onReset={() => setSelectedPost(null)}
        />
      ) : (
        <PostForm onSubmit={addPost} />
      )}
    </div>
  );
};
