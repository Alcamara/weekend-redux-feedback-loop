import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import { HashRouter as Router, Link, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
//components
import FeedbackWelcome from '../FeedbackWelcome/FeedbackWelcome';
import FeedBackFeeling from '../FeedBackFeeling/FeedBackFeeling';
import FeedBackUnderstanding from '../FeedBackUnderstanding/FeedBackUnderstanding';
import FeedBackSupported from '../FeedBackSupported/FeedBackSupported';
import FeedBackComment from '../FeedBackComment/FeedBackComment';
import FeedBackReview from '../FeedBackReview/FeedBackReview';
import FeedBackThankYou from '../FeedBackThankYou/FeedBackThankYou';
import FeedbackAdmin from '../FeedbackAdmin/FeedbackAdmin';

function App() {

  const dispatch = useDispatch()

  useEffect(()=>{

    axios({
      url:'/feedback/admin',
      method:'GET'
    }).then((res)=>{
      
       dispatch({
        type:'ADD_DATA',
        payload: res.data
       })

    })

  },[])

  return (

    <Router>
        <div className='App'>
          

          <header className='App-header'>
            <h1 className='App-title'>Feedback!</h1>
            <h4>Don't forget it!</h4>
          </header>

          <Route exact path='/'>
            {/* Welcome page */}
             <FeedbackWelcome/>
          </Route>
          
          <Route exact path='/question1'>
            {/* Feeling Questionn page */}
            <FeedBackFeeling/>
          </Route>

          <Route exact path='/question2'>
            {/* Understanding Question page */}
            <FeedBackUnderstanding/>
          </Route>

          <Route exact path='/question3'>
            {/* Support Question page*/}
            <FeedBackSupported/>
          </Route>

          <Route exact path='/question4'>
            {/* Comment Question page*/}
            <FeedBackComment />
          </Route>

          <Route exact path='/review'>
            {/* Review Page */}
            <FeedBackReview/>
          </Route>

          <Route exact path='/thankyou'>
            {/* Thank You page */}
            <FeedBackThankYou/>
          </Route>

          <Route exact path='/admin'>
            <FeedbackAdmin/>
          </Route>

        </div>
    </Router>
  );
}

export default App;
