import React from 'react';
import './card.styles.css';


export const Card = (props) => (
    <div className='card-container'>
        <img alt="drama" width="200" height="200" src={`https://static.vecteezy.com/system/resources/thumbnails/003/760/341/small/tv-pop-art-icon-free-vector.jpg`} />
        <h2> {props.drama.name}</h2>
        <p>{props.drama.status}</p>
        <p>Start Date: ({props.drama.premiered})</p>
        <p>End Date: ({props.drama.ended})</p>
    </div>
    
)

