import React from 'react';

const CreativePage: React.FC = () => {
  return (
    <div className="creative-container">
      <div className="creative-image">
        <img src="https://res.cloudinary.com/dyl3rncv3/image/upload/v1679983012/elewa-group-website/Images/creative-hub-image_dd6o8o.jpg" alt="Creative-Page" />
      </div>
      <div className="creative-h1">
        <h1>The Elewa Creative Hub</h1>
        </div>
        <div className='creative-p'>
        <p>
          Coming soon; The Elewa Creative Hub Lies at the heart of our organization. A two-acre property at the center of Nairobi's creative district, the hub connects all Elewa's Activities under a single banner.
        </p>
        <p>
          Through partnerships with the creative community, the Elewa Hub will organize vibrant activities that bring talents from different fields (tech, business, art, fashion) together to nurture continuous innovation.
        </p>
      </div>
    </div>
  );
};

export default CreativePage;
