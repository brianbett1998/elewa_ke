import React, { useState, useEffect, useRef } from 'react';

interface Card {
  imageUrl: string;
  imageAlt: string;
  buttonText: string;
  cardTitle: string;
  cardDescription: string;
}

const cardData: Card[] = [
  {
    imageUrl: 'https://res.cloudinary.com/dyl3rncv3/image/upload/v1679665800/elewa-group-website/elewa-team-members/jeff-elewa_hdupp7.jpg',
    imageAlt: 'Image 1',
    buttonText: 'Learn More',
    cardTitle: 'Card 1',
    cardDescription: 'Description for Card 1',
  },
  {
    imageUrl: 'https://res.cloudinary.com/dyl3rncv3/image/upload/c_scale,h_1000/v1682586211/IMG_9755_vfprhm.jpg',
    imageAlt: 'Image 2',
    buttonText: 'Learn More',
    cardTitle: 'Card 2',
    cardDescription: 'Description for Card 2',
  },
  {
    imageUrl: 'https://res.cloudinary.com/dyl3rncv3/image/upload/v1679656820/elewa-group-website/elewa-team-members/frank-elewa_kihn9e.jpg',
    imageAlt: 'Image 3',
    buttonText: 'Learn More',
    cardTitle: 'Card 3',
    cardDescription: 'Description for Card 3',
  },
  {
    imageUrl: 'https://res.cloudinary.com/dyl3rncv3/image/upload/v1679656820/elewa-group-website/elewa-team-members/jente-elewa_wbqyyi.jpg',
    imageAlt: 'Image 4',
    buttonText: 'Learn More',
    cardTitle: 'Card 4',
    cardDescription: 'Description for Card 4',
  },
  {
    imageUrl: 'https://res.cloudinary.com/dyl3rncv3/image/upload/v1679656822/elewa-group-website/elewa-team-members/ken-elewa_ydwzop.jpg',
    imageAlt: 'Image 5',
    buttonText: 'Learn More',
    cardTitle: 'Card 5',
    cardDescription: 'Description for Card 5',
  },
  {
    imageUrl: 'https://res.cloudinary.com/dyl3rncv3/image/upload/v1679656822/elewa-group-website/elewa-team-members/peter-elewa_zuzovx.jpg',
    imageAlt: 'Image 6',
    buttonText: 'Learn More',
    cardTitle: 'Card 6',
    cardDescription: 'Description for Card 6',
  },
  {
    imageUrl: 'https://res.cloudinary.com/dyl3rncv3/image/upload/v1679656820/elewa-group-website/elewa-team-members/jente-elewa_wbqyyi.jpg',
    imageAlt: 'Image 7',
    buttonText: 'Learn More',
    cardTitle: 'Card 7',
    cardDescription: 'Description for Card 7',
  },
  {
    imageUrl: 'https://res.cloudinary.com/dyl3rncv3/image/upload/v1679665800/elewa-group-website/elewa-team-members/jeff-elewa_hdupp7.jpg',
    imageAlt: 'Image 1',
    buttonText: 'Learn More',
    cardTitle: 'Card 1',
    cardDescription: 'Description for Card 1',
  },
];

const TeamManagement: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cardWidth = 513; // Adjust this value according to your card width in pixels
  const visibleCards = 4;

  const cardContainerRef = useRef<HTMLDivElement | null>(null);
  const scrollLeftBtnRef = useRef<HTMLButtonElement | null>(null);
  const scrollRightBtnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (
      cardContainerRef.current &&
      scrollLeftBtnRef.current &&
      scrollRightBtnRef.current
    ) {
      const cardContainer = cardContainerRef.current;
      const scrollLeftBtn = scrollLeftBtnRef.current;
      const scrollRightBtn = scrollRightBtnRef.current;

      const previousMember = () => {
        if (currentIndex > 0) {
          setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? cardData.length - visibleCards : prevIndex - 1
          );
        } else {
          setCurrentIndex(cardData.length - visibleCards);
        }
      };

      const nextMember = () => {
        const maxOffset = cardData.length;
        if (currentIndex + visibleCards < maxOffset) {
          setCurrentIndex((prevIndex) => prevIndex + 1);
        } else {
          setCurrentIndex(0);
        }
      };

      // Add event listeners
      scrollLeftBtn.addEventListener('click', previousMember);
      scrollRightBtn.addEventListener('click', nextMember);

      // Cleanup the event listeners when the component unmounts
      return () => {
        scrollLeftBtn.removeEventListener('click', previousMember);
        scrollRightBtn.removeEventListener('click', nextMember);
      };
    }
  }, [currentIndex]);

  function createCardElement(card: Card): JSX.Element {
    return (
      <div className="card">
        <div className="card-img-box">
          <img
            className="card-img"
            src={card.imageUrl}
            alt={card.imageAlt}
          />
        </div>
        <div className="btn-box">
          <div className="btn-text">{card.buttonText}</div>
        </div>
        <div>
          <div className="card-header">{card.cardTitle}</div>
          <div className="card-description">{card.cardDescription}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="team-management-container">
      <h2>Team Management</h2>
      <div ref={cardContainerRef} className="team-members">
        {cardData.slice(currentIndex, currentIndex + visibleCards).map((card, index) => (
          <div key={index} className="team-member">
            {createCardElement(card)}
          </div>
        ))}
      </div>
      <div className="team-controls">
        <button ref={scrollLeftBtnRef}>Previous</button>
        <button ref={scrollRightBtnRef}>Next</button>
      </div>
    </div>
  );
};

export default TeamManagement;
