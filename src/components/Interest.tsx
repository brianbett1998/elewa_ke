import React from 'react';

const Interest: React.FC = () => {
  return (
    <div className="interest-container">
      <div className="interest-image">
        <img src="https://res.cloudinary.com/dyl3rncv3/image/upload/v1679983082/elewa-group-website/Images/invest-now_ftxg4z.jpg" alt="interest-Page" />
      </div>
      <div className="interest-text">
        <h1>Investing in Elewa NV</h1>
      </div>
      <div className="interest-p">
        <p>
          From time to time we offer investment oppurtunites(private eqity & debt) to out community of investors. Interestd to take part when this oppurtunity arrives.
        </p>
      </div>
      <div>
        <button>Join the waiting list</button>
      </div>
      <div className='last-text-h1'>
       <h1>Become part of our mission.</h1>
       <h1>And start investing.</h1>
      </div>
      </div>
  );
};

export default Interest;
