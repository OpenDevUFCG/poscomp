import React from 'react';
import './Card.css';

import PropType from 'prop-types';

const Card = () => {
    return (
    <div className={'card__space'}>
        <div className={'card__container'}>
            <h1 className={'card__title-1'}>Questão 02 - 2019</h1>
            <span className={'card__theme'}>Tema 1</span>
            <span className={'card__subtitle'}>Matemática</span>
            <h3 className={'card__title-2'}>Sobre árvores, é correto afirmar que: </h3>
        </div>
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