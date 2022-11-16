import 'bootstrap/dist/css/bootstrap.min.css';
import SignUp from './SignUp';
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom';
import Login from './Login';
import Menu from './Menu';
import CardList from './Card';
import Home from './Home';
import { createContext, useEffect, useState } from 'react';

function App() {
 
  return (
    <div className="App" >
      <Router>
        <Routes>
      <Route exact path='/' element={<SignUp />} />
       <Route exact path='/login' element={<Login/>} /> 
      <Route exact path='/menu' element={<Menu/>} /> 
      <Route exact path='/home' element={<Home />} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
