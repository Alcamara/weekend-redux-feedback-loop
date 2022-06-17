import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Link, Route } from 'react-router-dom';

//components
import FeedBackFeeling from '../FeedBackFeeling/FeedBackFeeling';
import FeedBackUnderstanding from '../FeedBackUnderstanding/FeedBackUnderstanding';
import FeedBackSupported from '../FeedBackSupported/FeedBackSupported';
import FeedBackComment from '../FeedBackComment/FeedBackComment';
import FeedBackReview from '../FeedBackReview/FeedBackReview';

function App() {

  return (

    <Router>
        <div className='App'>
          

          <header className='App-header'>
            <h1 className='App-title'>Feedback!</h1>
            <h4>Don't forget it!</h4>
          </header>
          
          <Route exact path='/quetion1'>
            {/* Feeling Question */}
            <FeedBackFeeling/>
          </Route>

          <Route exact path='/question2'>
            {/* Understanding Question */}
            <FeedBackUnderstanding/>
          </Route>

          <Route exact path='/question3'>
            {/* Support Question */}
            <FeedBackSupported/>
          </Route>

          <Route exact path='/question4'>
            {/* Comment Question */}
            <FeedBackComment />
          </Route>

          <Route exact path='/review'>
            {/* Review Page */}
            <FeedBackReview/>
          </Route>

          
        </div>
    </Router>
  );
}

export default App;
