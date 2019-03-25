import React from 'react';

const Cards = props => {
    return (
        <div className='card'>
            <div className='animalImg'>
                <img src={props.image} alt={props.breed}/>
            </div>
            <div className='cardTitle'>
                {props.breed}
            </div>
        </div>
    );
}

export default Cards;