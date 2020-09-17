import React from 'react';
import './App.css';

import HomePage from "./pages/homepage/homepage.component"

// Route:

import {Link,Switch,Route} from 'react-router-dom'



const HatsPage = () =>{
  return(
    <div>
    {/* Link can be used for navigation */}
      <Link to= '/'> Go to /</Link>

    {/* OR History props can be used for navigation */}
      <h1> HATS PAGE </h1>
    </div>
  )
}



function App() {
  return (
    <div>
    <Switch>
      <Route exact path= '/' component= {HomePage} />
      <Route path ='/hats' component ={HatsPage} />
    </Switch>
      
      {/* <HomePage /> */}
    </div>
  );
}

export default App;
