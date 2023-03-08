import React, { useState, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { throttle } from "lodash";

import { setScrollTo } from '../../redux/actions'
import './Home.css';

import pageData from '../../data/homepage.json';
import image7 from '../../assets/images/image-7.png';
import quote from '../../assets/images/quote.svg';
import freedomStories from '../../assets/images/freedom-stories.png';
import image10 from '../../assets/images/image-10.png';
import image3 from '../../assets/images/image-3.png';
import image3Mobile from '../../assets/images/image-3.png';
import harley from '../../assets/images/harley.svg';
import image10Mobile from '../../assets/images/image-10-mobile.png';
import asiaoneTextImage from '../../assets/images/asiaone-text.png';
import asiaoneLogoImage from '../../assets/images/asiaone-logo.png';

const menuSize = pageData.menu.length;
const aboutAsiaoneLinksSize = pageData.aboutAsiaone.links.length;

const Home = () => {
    const dispatch = useDispatch();
    const [menuSelected, setMenuSelected] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const resizeHandler = useCallback(
        throttle(() => {
            const isMobile = (window.innerWidth <= 767) ? true : false;
            setIsMobile(isMobile);
        }, 500),
        []
    );

    useEffect(() => {
        if (isMobile) {
            console.log("is mobile");
        } else {
            console.log("is desktop");
        }
    }, [isMobile]);

    useEffect(() => {

        const isMobile = (window.innerWidth <= 767) ? true : false;
        setIsMobile(isMobile);

        window.addEventListener('resize', resizeHandler);
        return () => {
            window.removeEventListener('resize', resizeHandler)
        }


    }, []);

    const handleClick = (e) => {
        e.preventDefault();
        const payload = { "title": "test", }
        dispatch(setScrollTo(payload));
        setMenuSelected(!menuSelected);
    }

    return (
        <div>
            {/* NAV */}
            <div className="nav">
                {
                    menuSelected && <div className="menu">
                        <ul>
                            {
                                pageData.menu.map((item, index) => {
                                    const cName = (index != menuSize - 1) ? "separator" : null;
                                    return (<li className={cName} key={index}>{item.label}</li>)
                                })
                            }
                        </ul>
                    </div>
                }
                <div className="nav-button" onClick={handleClick}>M</div>
            </div>

            <div>
                {/* BANNER */}
                <div className="extended-container">
                    <div className="banner-container">
                        <div className="asiaone-logo">
                            <img src={asiaoneLogoImage} alt="asiaone"/>
                        </div>
                        <div className="banner">
                            <div className="banner-logo-title">
                                <img className="banner-logo" src={harley} alt="Harley" />
                                <div className="banner-title">{pageData.banner.title}</div>
                            </div>

                        </div>
                        <img className="image-fit" src={isMobile ? image3Mobile : image3} />
                    </div>
                </div>

                <div className="social-media-link">
                    <ul>
                        <li>Whatsapp</li>
                        <li>Facebook</li>
                        <li>Twitter</li>
                    </ul>
                </div>

                {/* INTRO */}
                <div className="container">
                    <div className="section-title intro"> {pageData.intro.title}</div>
                    <div className="text newline-text">
                        {pageData.intro.text}
                    </div>
                </div>

                <div className="container">
                    <div className="quote">
                        <div className="quote-person-container">
                            <img className="quote-person" src={image7} alt="Image" />
                        </div>
                        <div className="content">
                            <img className="symbol" src={quote} alt="Quote" />
                            <div className="text">{pageData.quote.text}</div>
                        </div>
                    </div>

                    {/* FREEDOM STORIES */}
                    <div>
                        <div className="section-title"> {pageData.freedomStories.title}</div>
                        <img className="image" src={freedomStories} alt="Image" />
                        <div className="text newline-text">
                            {pageData.freedomStories.text}
                        </div>
                    </div>
                </div>

                {/* FREEDOM STORIES - FOOTER */}
                <div className="extended-container">
                    <div className="parallax-text">
                        <p className="footer-text">{pageData.freedomStories.footer.text}</p>
                    </div>
                    <img className="women-image" src={isMobile ? image10Mobile : image10} alt="Image" />
                </div>
                
                {/* FAMILY AFFAIR */}
                <div className="container">
                    <div className="section-title"> {pageData.familyAffair.title}</div>
                    <div className="text newline-text">
                        {pageData.familyAffair.text}
                    </div>
                </div>

                {/* MORE STORIES */}
                <div className="container">
                    <div className="section-title"> {pageData.moreStories.title}</div>
                    <div className="text newline-text">
                        {pageData.moreStories.text}
                    </div>
                </div>

                <div className="about-harley"></div>


                {/* About AsiaOne */}
                <div className="extended-container">
                    <div className="about-asiaone">
                        <img  src={asiaoneTextImage} alt="asiaone" />
                        <ul>
                            {
                                pageData.aboutAsiaone.links.map((item, index) => {
                                    let cName = null;
                                    if (!isMobile) {
                                        cName = (index != aboutAsiaoneLinksSize - 1) ? "separator-vertical" : null;
                                    } 
                                    return (<li className={cName} key={index}>{item.label}</li>)
                                })
                            }
                        </ul>
                        <div className="copyright">
                            <span>{pageData.aboutAsiaone.footer.copyright}</span>&nbsp;
                            <span className="registeredTo">{pageData.aboutAsiaone.footer.registered}</span>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    );
}

export default Home;