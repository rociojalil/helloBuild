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
import NavBar from './Components/Home/NavBar/Navbar'
import Favorites from './Components/RepoCards/favorites'



function App() {
  return (
    
    
      <React.Fragment>

           <BrowserRouter>
            <DataProvider>
              <Route exact path="/home" component={NavBar}/>
              <Route exact path="/repositories" component={NavBar}/>
              <Route exact path="/" component={Landing}/>
              <Route exact path="/home" component={Home}/>
              <Route exact path="/repositories" component={Repos}/>
              <Route exact path="/repositories/favorites" component={Favorites}/>
              <Route exact path="/repositories/favorites" component={NavBar}/>
            </DataProvider>
           
          </BrowserRouter>
      </React.Fragment>
  

  );
}

export default App;
