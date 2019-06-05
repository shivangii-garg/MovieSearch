import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import Explore from './components/Explore/Explore';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import Movie from './components/Movie/Movie';

function App() 
{
  return (
    <BrowserRouter>
      <Route path = '/' component = {Home} exact/>  
      <Route path = '/explore' component = {Explore}/>
      <Route path = '/signin' component = {Signin}/>    
      <Route path = '/navigation' component = {Navigation}/>
      <Route path = '/register' component = {Register}/>
    </BrowserRouter>
      );
}


export default App;
