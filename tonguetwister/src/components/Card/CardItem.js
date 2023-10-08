import React from 'react';
import { Link } from 'react-router-dom';

export default function CardItem(props) {
  return (
    <li className='card-item'>
      <Link className='card-item-link' to={props.path}>
        <figure className='card-item-pic-wrap'>
          <img src={props.src} className='card-item-img' alt={props.label} />
        </figure>
        <div className='card-item-info'>
          <h5 className='card-item-text'>{props.text}</h5>
        </div>
      </Link>
    </li>
  );
}