import React
 from 'react';
import image3 from '../../assets/images/image-3.png';
import image3Mobile from '../../assets/images/image-3.png';
import harley from '../../assets/images/harley.svg';
import asiaoneLogoImage from '../../assets/images/asiaone-logo.png';

const Banner = ({ pageData, isMobile }) => {
    return (
        <div className="extended-container">
            <div className="banner-container">
                <div className="asiaone-logo">
                    <img src={asiaoneLogoImage} alt="asiaone" />
                </div>
                <div className="banner">
                    <div className="banner-logo-title">
                        <img className="banner-logo" src={harley} alt="Harley" />
                        <div className="banner-title">{pageData.title}</div>
                    </div>

                </div>
                <img className="image-fit" src={isMobile ? image3Mobile : image3} />
            </div>
        </div>
    );
}

export default Banner;