import React from 'react';
import MyPosts from './MyPosts/MyPosts';

const Posts = (props) => {
  debugger;

  let newPostElement = React.createRef();

  let onPostTextChange = () => {
    let text = newPostElement.current.value;
    props.changePostText(text);
  };

  let onAddPost = (e) => {
    e.preventDefault();
    props.addPost();
  };

  return (
    <div className="posts">
      <h2 className="heading">My posts</h2>
      <div className="posts-create">
        <form action="glimake.ru">
          <textarea name="message" onChange={onPostTextChange} ref={newPostElement} value={props.state.newPostText} placeholder="Type your news here.." />
          <input type="hidden" />
          <input type="submit" className="btn btn-action" value="Send" onClick={onAddPost} />
        </form>
      </div>
      <MyPosts profile_posts={props.state.postsData} />
    </div>
  );
}

export default Posts;
