import React from 'react';

const Care: React.FC = () => {
  return (
    <div>
        <div className='main-h1'>
      <h1>We Care !</h1>
      </div>
      <div className='p1'>
      <p>Elewa is a mission-driven organization. We make use of our cooperative and shared culture to drive the needle for the development of people and environment. We care about our growth, but also care deeply about the context surrounding us.</p>
      <p>Our investments are therefore not limited to internal ones, but contribute heavily to our community and environment. From training the next scout leaders on sustainable practices, to bridging the employment gap for junior software developers.</p>
      </div>
      <div className='complete'>
      <div className='holistic'>
      <img src="https://res.cloudinary.com/dyl3rncv3/image/upload/v1680180166/elewa-group-website/Icons/PNG/Holistic_118_ylipr0.png" alt="holistic"/>
      <h3>Holistic</h3>
      <p>We go beyond a simple patch-up but develop lasting solutions through holistic design.</p>
      </div>

      <div className='impact'>
      <img src="https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690301/elewa-group-website/Icons/PNG/coorperative_kzlzrg.png" alt="impact"/>
      <h3>Impact</h3>
      <p>Impact as a direct, or indirect, result. All our respective organizations have underlying theories of change.</p>
      </div>
      <div className='open-data'>
        <img src="https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690299/elewa-group-website/Icons/PNG/Opendata_fe7h3j.png" alt="open-data"/>
       <h3>Open data</h3>
       <p>Sharing is caring. We share what we learn. As proof, we've open-sourced all our internal projects.</p>
      </div>
      </div>
    </div>
  );
};

export default Care;
