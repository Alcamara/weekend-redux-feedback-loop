import React from 'react';
import axios from 'axios';
import './App.css';

//components
import FeedBackFeeling from '../FeedBackFeeling/FeedBackFeeling';
import FeedBackUnderstanding from '../FeedBackUnderstanding/FeedBackUnderstanding';
import FeedBackSupported from '../FeedBackSupported/FeedBackSupported';
import FeedBackComment from '../FeedBackComment/FeedBackComment';

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      {/* Feeling Question */}
      <FeedBackFeeling/>

      {/* Understanding Question */}
      <FeedBackUnderstanding/>

      {/* Support Question */}
      <FeedBackSupported/>

      {/* Comment Question */}
      <FeedBackComment />
    </div>
  );
}

export default App;
