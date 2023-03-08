import React from 'react';

import image7 from '../../assets/images/image-7.png';
import quote from '../../assets/images/quote.svg';

const Quote = ({ pageData }) => {
    return (
        <div className="container">
            <div className="quote">
                <div className="quote-person-container">
                    <img className="quote-person" src={image7} alt="Image" />
                </div>
                <div className="content">
                    <img className="symbol" src={quote} alt="Quote" />
                    <div className="text">{pageData.text}</div>
                </div>
            </div>
        </div>
    );
}

export default Quote;