import React from 'react';
import CardItem from './CardItem';
import './Card.css';

export default function Card() {
  return (
    <div className='card'>
      <h1>First steps in to becoming a true British Person</h1>
      <div className='card--container'>
        <div className='wrapper'>
          <ul className='card--items'>
            <CardItem
              src="img/janko-ferlic-sfL_QOnmy00-unsplash.jpg"
              text="Explore a new side of a new Language"
              label='Adventure'
              path='/Learn'
            />
            <CardItem
              src="img/janko-ferlic-sfL_QOnmy00-unsplash.jpg"
              text="Explore a new side of Languages"
              label='Adventure'
              path='/Learn'
            />
            <CardItem
              src="img/janko-ferlic-sfL_QOnmy00-unsplash.jpg"
              text="Explore a new side of Languages"
              label='Adventure'
              path='/Learn'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}