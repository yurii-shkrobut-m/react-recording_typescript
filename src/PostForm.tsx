import classNames from 'classnames';
import React, { useState } from 'react';

export const PostForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const [hasTitleError, setHasTitleError] = useState(true);

  const [userId, setUserId] = useState(0);
  const [hasUserIdError, setHasUserIdError] = useState(true);
  
  const [body, setBody] = useState('');
  const [hasBodyError, setHasBodyError] = useState(true);

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
    setHasTitleError(false);
  };

  const handleUserIdChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTitle(event.target.value);
    setHasTitleError(false);
  };

  const handleBodyChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTitle(event.target.value);
    setHasTitleError(false);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!title) {
      setHasTitleError(true);
      return;
    }
  };

  return (
    <form 
      action="/api/posts" 
      method="POST" 
      className="box"
      onSubmit={handleSubmit}
    >
      <div className="field">
        <label className="label" htmlFor="post-title">
          Title
        </label>

        <div className={classNames('control', {
          'has-icons-right': hasTitleError,
        })}>
          <input
            id="post-title"
            className={classNames('input', {
              'is-danger': hasTitleError
            })} 
            type="text" 
            placeholder="Email input" 
            value={title}
            onChange={handleTitleChange}
          />

          {hasTitleError && (
            <span className="icon is-small is-right">
              <i className="fas fa-exclamation-triangle has-text-danger"></i>
            </span>
          )}
        </div>

        {hasTitleError && (
          <p className="help is-danger">Please enter a title</p>
        )}
      </div>

      <div className="field">
        <label className="label" htmlFor="post-user-id">
          Subject
        </label>

        <div className="control has-icons-left">
          <div className={classNames('select', {
            'is-danger': hasUserIdError,
          })}>
            <select
              id="post-user-id"
              value={userId}
              onChange={handleUserIdChange}
            >
              <option value="0" disabled>Select a user</option>
            </select>
          </div>

          <span className="icon is-small is-left">
            <i className="fas fa-user"></i>
          </span>
        </div>

        {hasUserIdError && (
          <p className="help is-danger">Please select a user</p>
        )}
      </div>

      <div className="field">
        <label className="label">
          Message
        </label>

        <div className="control">
          <textarea 
            className={classNames('textarea', {
              'is-danger': hasBodyError,
            })} 
            placeholder="Add some text here"
            value={body}
            onChange={handleBodyChange}
          ></textarea>
        </div>

        {hasBodyError && (
          <p className="help is-danger">Please select a user</p>
        )}
      </div>

      <div className="buttons">
        <button type="submit" className="button is-link">
          Submit
        </button>

        <button type="reset" className="button is-link is-light">
          Cancel
        </button>
      </div>
    </form>
  );
};