
import React, { useState } from 'react';
import { Carousel } from 'antd';

const CarouselCustom = (props) => {

  const [photos] = useState(props.photos);

  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const handlePhotoChange = (index) => {
    setCurrentPhotoIndex(index);
  };

  return (
    <div style={{color:'white'}}> 
   
      <Carousel afterChange={handlePhotoChange} autoplay={{ interval: 3000 }}>
        {photos.map((photo, index) => (
          <div key={index}>
            <img style={{marginTop:'40px',display: 'flex', justifyContent: 'center', objectFit:'cover',height:'600px',marginLeft:'33%',width:'600px'} }src={photo.url} alt={photo.title}  />
          </div>
        ))}
      </Carousel>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <h2 style={{fontFamily:'cursive'}}>{photos[currentPhotoIndex].title}</h2>
        <p style={{fontSize:'22px',fontFamily:'inherit',color:'white',lineHeight:'20px',marginLeft:'70px',marginRight:'70px'}}>{photos[currentPhotoIndex].description}</p>
        
      </div>
    </div>
  );
};

export default CarouselCustom;

