import React from 'react';
import './sass/app.scss';
import Header from './components/Header';
import MainContent from './components/MainContent';

function App() {
  return (
    <div className="app">
      <Header/>
      <MainContent/>
    </div>
  );
}

export default App;
