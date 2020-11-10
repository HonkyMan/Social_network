import React from 'react';

const Post = (props) => {
  return (
    <div className="item posts-history-item" data-post-id={props.post_id}>
      <div className="post-photo">
        <img src={props.img} alt="#" />
      </div>
      <div className="post-content">
        <p className="date">\\ {props.date}</p>
        <h3 className="author">{props.author}</h3>
        <div className="message">
          {props.post_text}
        </div>
      </div>
    </div>
  );
}

export default Post;
