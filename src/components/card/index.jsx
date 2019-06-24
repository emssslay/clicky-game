import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

export default function Card({ handleClick, id, type, flipped, height, width }) {
    return <div
        className={`flip-container ${flipped ? 'flipped' : ''}`}
        style={{
            width, height
        }}
        onClick={() => handleClick(id)}
    >
        <div className="flipper">
            <img
                style={{
                    height, width
                }}
                className={flipped ? 'front' : 'back'}
                src={flipped ? `../../../public/images/${type}.png` : '../../../public/images/Screen Shot 2019-06-23 at 4.03.16 PM.png'} //todo, set acutal images
            />
        </div>
    </div>
}

Card.propTypes = {
    handleClick: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
    flipped: PropTypes.bool.isRequired,
    type: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
}
