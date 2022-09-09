import './App.css';
import React from 'react';
import { Route } from 'react-router-dom';
import Landing from './Pages/LadingP/Landing';
// import NavBar from './Pages/NavBar/NavBar';
import Home from './Pages/Home/Home';
import CountryDetail from './Pages/CountryDetail/CountryDetail';
import CreateActivity from './Pages/CreateActivity/CreateActivity';
import About from './Pages/About/about';

function App() {
  return (
    <>
      <Route exact path='/' component={Landing} />
      <Route exact path='/home' component={Home} />
      <Route exact path='/create' component = {CreateActivity}/>
      <Route exact path='/country/:id' component = {CountryDetail}/>
      <Route exact path='/about' component = {About}/>
     </>
  );
}

export default App;
