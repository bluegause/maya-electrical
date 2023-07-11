import React from 'react';

export default function Card(props) {
  return(
    <div className='card'>
      <div className='card-icon'>{props.icon}</div>
      <div className='description-container'>
        <h2 className='card-heading'>{props.name}</h2>
        <p className='description'>{props.description}</p>
      </div>
    </div>
  )
}