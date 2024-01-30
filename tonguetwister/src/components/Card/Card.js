import React from 'react';
import './Card.css';
import CardItem from './CardItem';

function Card() {
  return (
    <div className='cards'>
      <h1>First steps in to becoming a true British Person</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='img\janko-ferlic-sfL_QOnmy00-unsplash.jpg'
              text='Explore a new side of a new Language'
              label='Learning'
              path='/Learn'
            />
            <CardItem
              src='img\jessica-pamp-2XeP0c-J5B4-unsplash.jpg'
              text='Travel through challanges and win a badge'
              label='Quizz'
              path='/Quizz'
            />
            <CardItem
              src='img\blake-cheek-YJ1HGUZc668-unsplash.jpg'
              text='See your achivments and track your progress'
              label='Profile'
              path='/Profile'
            />
          </ul>
          
        </div>
      </div>
    </div>
  );
}

export default Card;