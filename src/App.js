import './App.css';
import PageLogin from './PageLogin.js';
import PageHome from './PageHome.js';
import Nav from './ComponentResponsiveAppBar.js';
import React, { useState } from 'react';


function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  if (!isLoggedIn) {
    return (
      <div className="App">
        <PageLogin setLoggedIn={setLoggedIn}/>
      </div>
    );
  } else {
    return (
      <div className="App">
        <Nav setLoggedIn={setLoggedIn} />
        <PageHome />
      </div>
    )
  }
}

export default App;
