
import './App.css';
import React from 'react'
import Nav from './Nav';
import Home from './Home';
import About from './About';
import Blog from './Blog';
import Con from './Contact';
import PageNotFound from './404Page';
import {Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Nav/>
        <switch>
        <Routes>
        <Route path='/' exact = {true} element={<Home/>}/>
        <Route path='/about'element={<About/>}/>
        <Route path='/blog'element={<Blog/>}/>
        <Route path='/contact'element={<Con/>}/>
        <Route path='*'element={<PageNotFound/>}/>
        </Routes>
        </switch>
    </div>
  );
}

export default App;
