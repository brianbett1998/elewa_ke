import React from 'react';

const HomeBlack: React.FC = () => {
  return (
    <div className="home-black">
      <div className="numbers-container">
        <h1>733+</h1>
        <p>People trained</p>
        <h1>733k</h1>
        <p>careers launched</p>
        <h1>200+</h1>
        <p>Projects finsihed</p>
        <h1>56</h1>
        <p>Investors</p>
        
      </div>

      <div className="image-container">
        <img src="https://res.cloudinary.com/dyl3rncv3/image/upload/v1681306013/lady-impact_rnc9jy.jpg" alt="Main Image" />
        <div className="image-text">
          <h1>(Social) business for the win</h1>
          </div>
          <div className='image-p'>
          <p>With a young dynamic population that is eager to contribute to the global economy, East Africa has a lot to offer to the world.</p>
          <p> Now is the time to nurture sustainable, inclusive and scalable business. The rest will take care of itself.</p>
        </div>
      </div>
    </div>
  );
};

export default HomeBlack;
