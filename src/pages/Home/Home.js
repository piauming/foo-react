import React, { useState, useEffect, useCallback, useRef } from "react";
import { useDispatch } from "react-redux";
import { throttle } from "lodash";

import { setScrollTo } from '../../redux/actions'
import './Home.css';

import HarleyRiders from "./HarleyRiders";
import Quote from "./Quote";
import FamilyAffair from "./FamilyAffair";
import MoreStories from "./MoreStories";
import AboutAsiaone from "./AboutAsiaOne";
import AboutHarley from "./AboutHarley";
import OnlyWomenInGroup from "./OnlyWomenInGroup";
import Banner from "./Banner";
import Navbar from "./NavBar";
import SocialMediaLinks from "./SocialMediaLinks";

import pageData from '../../data/homepage.json';

const Home = () => {
    const refFamilyAffair = useRef(null);
    const refMoreStories = useRef(null);
    const refOnlyWomenInGroup = useRef(null);
    const refHarleyRiders = useRef(null);

    const dispatch = useDispatch();
    const [isMobile, setIsMobile] = useState(false);

    const resizeHandler = useCallback(
        throttle(() => {
            const isMobile = (window.innerWidth <= 767) ? true : false;
            setIsMobile(isMobile);
        }, 300),
        []
    );

    const scrollToView = (id) => {
        switch (id) {
            case "harleyRiders":
                refHarleyRiders.current?.scrollIntoView({ behavior: 'smooth' });
                break;
            case "onlyWomenInGroup":
                refOnlyWomenInGroup.current?.scrollIntoView({ behavior: 'smooth' });
                break;
            case "familyAffair":
                refFamilyAffair.current?.scrollIntoView({ behavior: 'smooth' });
                break;
            case "moreStories":
                refMoreStories.current?.scrollIntoView({ behavior: 'smooth' });
                break;
            default:
                break;
        }
    }

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
    }

    return (
        <div>
            <Navbar pageData={pageData.menu} clickHandler={scrollToView} />

            <div>
                <Banner pageData={pageData.banner} isMobile={isMobile} />

                <SocialMediaLinks />

                <HarleyRiders ref={refHarleyRiders} pageData={pageData.intro} isMobile={isMobile} />

                <Quote pageData={pageData.quote} />

                <OnlyWomenInGroup ref={refOnlyWomenInGroup} pageData={pageData.freedomStories} isMobile={isMobile} />

                <FamilyAffair ref={refFamilyAffair} pageData={pageData.familyAffair} />

                <MoreStories ref={refMoreStories} pageData={pageData.moreStories} />

                <AboutHarley pageData={pageData.aboutHarley} isMobile={isMobile} />

                <AboutAsiaone pageData={pageData.aboutAsiaone} isMobile={isMobile} />

            </div>
        </div>
    );
}

export default Home;