import React from 'react';
import {Card} from '../card/card.component';
import './card-list.styles.css';

export const CardList = (props) => (
    <div className='card-list'>{
        props.TVDrama.map(drama => (
            <Card key={drama.id} drama={drama}/>
            ))
        }
    </div>

);
