import React from 'react';
import CardItem from './CardItem';
import './Card.css';

export default function Card() {
  return (
    <div className='cards'>
      <h1>Learning</h1>
      <div className='cards--container'>
        <div className='wrapper'>
          <ul className='cards--items'>
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