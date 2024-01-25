import React from 'react';

const Rating = ({ rating }) => {
    const normalizedRating = Math.min(Math.max(0, rating), 5);

    const stars = Array.from({ length: 5 }, (_, index) => index < normalizedRating);

    return (
        <div>
            {stars.map((filled, index) => (
                <Star key={index} filled={filled} />
            ))}
        </div>
    );
};

const Star = ({ filled }) => (
    <span className='star' style={{ color: filled ? 'gold' : 'gray' }}>&#9733;</span>
);

export default Rating;
