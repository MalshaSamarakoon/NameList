import React from 'react';
import { BrowserRouter, Route,Switch } from 'react-router-dom';


import NameList from './components/Pages/NameList/NameList';
import HeaderBar from './components/HeaderBar/HeaderBar';
import Home from './components/Pages/Home/Home';
import About from './components/Pages/About/About';


function App() {
  return( 
  <div>
    <BrowserRouter>
          <HeaderBar/>
          <Route path="/home">     <Home/>     </Route> 
          <Route path="/about">    <About/>    </Route>
          <Route path="/list"> <NameList/> </Route>
    </BrowserRouter>    
  </div> 

);

}
export default App;


