import React from 'react';
import '../components/HomePage.css';
import '../assets/snow.jpg'
import { Button } from 'antd';
import { Link } from 'react-router-dom';
const imageStyle = {
    width: '100%',
    height: '160px',
    objectFit: 'cover',
  };

const Homepage = () => {
  return (
    <div className = 'homepage-container' style={{ textAlign: 'center', padding: '50px' }}>
         <div className='content' style={{ textAlign: 'center', padding: '50px' }}>
        <img src="/tent.jpg" alt="" />
      <h2 style={{fontSize:'70px' ,marginTop:'5%'}} className='animate__slideInLeft heading-animation'>Welcome to <strong className="pahadis-text">Pahadis </strong> Explore the Unxplored!</h2> 
       
      <h2 className='animate__zoomIn paragraph-animation'>Pahadis organizes exciting treks and camping events for adventure enthusiasts!</h2>
      <h2>Organized over <strong>30,000 treks</strong>, consistently achieving an average rating of <strong>4.5 stars</strong> or above.</h2>
      <Link to ='upcoming-treks'><button style={{marginTop:'75px'}} className='animated-button'>Upcoming Trekks</button></Link>
      </div>
     
    </div>
  );
};

export default Homepage;

