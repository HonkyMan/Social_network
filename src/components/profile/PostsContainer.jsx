import React from 'react';
import { connect } from 'react-redux';
import { addPostActionCreator, onPostTextChangeActionCreator } from '../../redux/profileReducer';
import Posts from './Posts';

let mapStateToProps = (state) => {
  return {
    state: state.profilePage
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    changePostText: (text) => {
      dispatch(onPostTextChangeActionCreator(text));
    },
    addPost: () => {
      dispatch(addPostActionCreator());
    }
  }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;
