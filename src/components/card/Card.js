import React from 'react';
import './Card.css';

import PropType from 'prop-types';

const Card = () => {
    return (
    <div className={'card__space'}>
        <div className={'card__container'}></div>
    </div>
    );
};

Card.PropType = {
    question: PropType.shape({
        number: PropType.string,
        year: PropType.string,
        area: PropType.string,
        theme: PropType.string,
        textQuestion: PropType.string,
        
    })
};

export default Card;