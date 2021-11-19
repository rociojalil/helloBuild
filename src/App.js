import {
  BrowserRouter,
  Route
} from "react-router-dom";
import './App.css';
import 'boxicons';
import React from 'react';
import Landing from './Components/Landing/Landing';
import Home from './Components/Home/Home.jsx';



function App() {
  return (
    
    
      <React.Fragment>

           <BrowserRouter>
          
              <Route exact path="/" component={Landing}/>
              <Route exact path="/home" component={Home}/>
           
          </BrowserRouter>
      </React.Fragment>
  

  );
}

export default App;
