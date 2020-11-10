import React from 'react';
import PostsContainer from './PostsContainer';
import Profile from './Profile';

const MainContent = () => {

  return (
    <main className="container">
      <Profile />
      <PostsContainer />
    </main>
  );
}

export default MainContent;
