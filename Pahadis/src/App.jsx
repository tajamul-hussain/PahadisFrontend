
import React from 'react';
import Homepage from './components/HomePage';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Footer } from 'antd/es/layout/layout';
import Trek from './components/Trek';
import '../src/App.css'
import ContactPage from './components/ContactPage';
function App() {
  return (
    <Router>
      <Navbar style = {{marginTop : '0px'}} />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path = 'upcoming-treks' element = {<Trek/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
      </Routes>
     
    </Router>
    
    
  );
}

export default App;
