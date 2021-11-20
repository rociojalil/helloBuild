import {
  BrowserRouter,
  Route
} from "react-router-dom";
import './App.css';
import 'boxicons';
import React from 'react';
import Landing from './Components/Landing/Landing';
import Home from './Components/Home/Home.jsx';
import Repo from './Components/RepoCards/repoCards'



function App() {
  return (
    
    
      <React.Fragment>

           <BrowserRouter>
          
              <Route exact path="/" component={Landing}/>
              <Route exact path="/home" component={Home}/>
              <Route exact path="/repositories" component={Repo}/>
           
          </BrowserRouter>
      </React.Fragment>
  

  );
}

export default App;
