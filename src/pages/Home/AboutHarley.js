import React from "react";

import aboutHarleyBg from '../../assets/images/aboutHarleyBg.png';
import aboutHarleyBgMobile from '../../assets/images/aboutHarleyBgMobile.png';

const ClickHere = ({ url }) => {
    return (
        <a className="button" href={url} target="_blank" rel="noopener noreferrer">
            Click Here
        </a>
    )
}

const AboutHarley = ({ pageData, isMobile }) => {
    return (
        <div className="extended-container" style={{ backgroundColor: "black" }}>
            <div className="container-content newline-text">
                <p>{isMobile ? pageData.titleMobile : pageData.title}</p>
                <ClickHere url={pageData.url} />
            </div>
            <img className="bg-image" src={isMobile ? aboutHarleyBgMobile : aboutHarleyBg} alt="Image" />
        </div>
    );
}

export default AboutHarley;