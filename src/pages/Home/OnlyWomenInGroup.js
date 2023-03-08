import React, { forwardRef } from "react";

import freedomStories from '../../assets/images/freedom-stories.png';
import image10 from '../../assets/images/image-10.png';
import image10Mobile from '../../assets/images/image-10-mobile.png';

const OnlyWomenInGroup = ({pageData, isMobile}, ref) => {
    return (
        <div ref={ref} style={{ paddingBottom: 20 }}>
            <div className="container">
                <div>
                    <div className="section-title"> {pageData.title}</div>
                    <img className="image" src={freedomStories} alt="Image" />
                    <div className="text newline-text">
                        {pageData.text}
                    </div>
                </div>
            </div>
            <div className="extended-container add-bottom">
                <div className="parallax-text">
                    <p className="footer-text">{pageData.footer.text}</p>
                </div>
                <img className="women-image" src={isMobile ? image10Mobile : image10} alt="Image" />
            </div>
        </div>
    );
}


export default forwardRef(OnlyWomenInGroup);