import React from 'react';
import { addPostActionCreator, onPostTextChangeActionCreator } from '../../redux/profileReducer';
import MyPosts from './MyPosts/MyPosts';

const Posts = (props) => {
  debugger;

  let newPostElement = React.createRef();

  let onPostTextChange = () => {
    debugger;
    let text = newPostElement.current.value;
    props.dispatch(onPostTextChangeActionCreator(text));
  };

  let addPost = (e) => {
    e.preventDefault();
    props.dispatch(addPostActionCreator());
  };

  return (
    <div className="posts">
      <h2 className="heading">My posts</h2>
      <div className="posts-create">
        <form action="glimake.ru">
          <textarea name="message" onChange={onPostTextChange} ref={newPostElement} value={props.profile_posts.newPostText} placeholder="Type your news here.." />
          <input type="hidden" />
          <input type="submit" className="btn btn-action" value="Send" onClick={addPost} />
        </form>
      </div>
      <MyPosts profile_posts={props.profile_posts.postsData} />
    </div>
  );
}

export default Posts;
