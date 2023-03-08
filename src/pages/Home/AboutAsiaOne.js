import React from "react";

import './Home.css';
import asiaoneTextImage from '../../assets/images/asiaone-text.png';

const AboutAsiaOne = ({ pageData, isMobile }) => {
    const linkSize = pageData.links.length;

    return (
        <div className="extended-container">
            <div className="about-asiaone">
                <img src={asiaoneTextImage} alt="asiaone" />
                <ul>
                    {
                        pageData.links.map((item, index) => {
                            let cName = null;
                            if (!isMobile) {
                                cName = (index != linkSize - 1) ? "separator-vertical" : null;
                            }
                            return (<li className={cName} key={index}>{item.label}</li>)
                        })
                    }
                </ul>
                <div className="copyright">
                    <span>{pageData.footer.copyright}</span>&nbsp;
                    <span className="registeredTo">{pageData.footer.registered}</span>
                </div>
            </div>
        </div>
    )
}

export default AboutAsiaOne;