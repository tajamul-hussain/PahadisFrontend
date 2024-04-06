import React from 'react';
import CarouselCustom from './Carousel';
import '../components/Trek.css'
const upcomingTrekks = [
    {
        title: 'Gulmarg Camp',
      description: 'The trek to Gulmarg in Kashmir offers breathtaking alpine landscapes, lush meadows, and panoramic views of snow-capped peaks, providing an unforgettable adventure in the heart of the Himalayas.',
      url: 'https://images.unsplash.com/photo-1418985991508-e47386d96a71?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGd1bG1hcmclMjBjYW1wJTIwc25vd3xlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      title: 'Aaru Pahalgam Camp',
      description: 'Trekking through Aru Valley in Pahalgam unveils serene meadows, glistening streams, dense forests, and towering glaciers, offering a tranquil escape amidst Kashmir\'s majestic landscapes.',
      url: 'https://images.unsplash.com/photo-1618772446265-3f9f8e6f8487?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FtcHN8ZW58MHx8MHx8fDA%3D',
    },
    {
      title: 'Tarsar Marsar Trek',
      description: 'Embark on the Tarsar Marsar Lake trek, where azure waters mirror towering peaks, weaving through alpine meadows and pristine wilderness, offering a surreal Himalayan adventure.',
      url: 'https://images.unsplash.com/photo-1709794644975-503ea9af0f94?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFrZSUyMHBob3Rvc3xlbnwwfHwwfHx8MA%3D%3D',
    },
  ]


const Trek = () => {
  return (
    <div className='trek-container'> 
        
        <CarouselCustom photos = {upcomingTrekks}/>
    </div>
  );
};

export default Trek;
