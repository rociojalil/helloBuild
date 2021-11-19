import {
  BrowserRouter,
  Route
} from "react-router-dom";
import './App.css';
import React from 'react';
import Landing from './Components/Landing/Landing';



function App() {
  return (
    
    
      <React.Fragment>

           <BrowserRouter>
          
              <Route exact path="/" component={Landing}/>
           
          </BrowserRouter>
      </React.Fragment>
  

  );
}

export default App;
