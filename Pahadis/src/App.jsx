
import React from 'react';
import Homepage from './components/HomePage';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Trek from './components/Trek';
import '../src/App.css'
import ContactPage from './components/ContactPage';
import ComingSoonCard from './components/ComingSoonCard';
function App() {
  return (
    <Router>
      <Navbar style = {{marginTop : '0px'}} />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path = 'upcoming-treks' element = {<Trek/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
        <Route path='/shop' element={<ComingSoonCard/>}/>
      </Routes>
     
    </Router>
    
    
  );
}

export default App;
