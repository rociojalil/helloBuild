import {
  BrowserRouter,
  Route
} from "react-router-dom";
import './App.css';
import 'boxicons';
import React from 'react';
import Landing from './Components/Landing/Landing';
import Home from './Components/Home/Home.jsx';
import Repos from './Components/RepoCards/repoCards'
import { DataProvider } from './Context/dataProvider'



function App() {
  return (
    
    
      <React.Fragment>

           <BrowserRouter>
           <DataProvider>
          
              <Route exact path="/" component={Landing}/>
              <Route exact path="/home" component={Home}/>
              <Route exact path="/repositories" component={Repos}/>
              </DataProvider>
           
          </BrowserRouter>
      </React.Fragment>
  

  );
}

export default App;
