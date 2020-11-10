import React from 'react';
import Posts from './Posts';
import Profile from './Profile';

const MainContent = (props) => {

  return (
    <main className="container">
      <Profile />
      <Posts profile_posts={props.state} dispatch={props.dispatch} />
    </main>
  );
}

export default MainContent;
