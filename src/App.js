import React from 'react';
import './App.sass';
import MainContent from './components/profile/MainContent';
import Footer from './components/footer/footer';
import Header from './components/header/Header';

const App = () => {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
