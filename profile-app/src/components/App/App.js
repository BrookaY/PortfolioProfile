import React from 'react';
import './App.css';

import AboutMe from '../AboutMe/AboutMe';

function App() {
  return (
    <div className='App'>
  <div class="container">
    <p class="msg">
      Mabrouka Yaqoob
    </p>
  </div>

  <div class="aboutme">
  <AboutMe/>
  <p class="allaboutme">
  About me
    </p>

  </div>
  <footer>
    Check out my <a href="https://github.com/BrookaY" target="_blank" rel="noopener noreferrer">Github</a>.
  </footer>
  </div>
  );
}

export default App;
