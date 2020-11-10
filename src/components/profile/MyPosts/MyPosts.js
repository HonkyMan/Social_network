import React from 'react';
import Post from './Post/Post';

const MyPosts = (props) => {
  let allPosts = props.profile_posts.map(post => {
    return <Post id={post.post_id} date={post.post_date} img={post.post_image} author={post.post_author} post_text={post.post_message} />
  });

  return (
    <div className="posts-history">
      {allPosts}
    </div>
  );
}

export default MyPosts;
