import React from 'react';
import './App.css';
import {Routes,Route} from 'react-router-dom'
import Nav from './components/Nav';
import Home from './components/Home';
import Addtodo from './components/Addtodo';
import Updatetodo from './components/Updatetodo';
function App() {
  return (
    <>
    <Nav/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/addtodo' element={<Addtodo/>}/>
      <Route path='/updatetodo/:id' element={<Updatetodo/>}/>
    </Routes>
    </>
  );
}

export default App;
