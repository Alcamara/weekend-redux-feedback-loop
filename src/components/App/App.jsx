import React from 'react';
import axios from 'axios';
import './App.css';

//components
import FeedBackFeeling from '../FeedBackFeeling/FeedBackFeeling';

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      {/* Feeling Question */}
      <FeedBackFeeling/>
    </div>
  );
}

export default App;
