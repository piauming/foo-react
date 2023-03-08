import React from "react";

import SocialButton from "./SocialButton";

import twitterIcon from '../../assets/images/twitter-icon.png';
import facebookIcon from '../../assets/images/facebook-icon.png';
import whatsappIcon from '../../assets/images/whatsapp-icon.png';

const SocialMediaLinks = (props) => {

    const url = "https://www.google.com";

    return (
        <div className="social-media-link">
            <ul>
                <li><SocialButton src={whatsappIcon} url={url} alt="WhatsApp" /></li>
                <li><SocialButton src={facebookIcon} url={url} alt="Facebook" /></li>
                <li><SocialButton src={twitterIcon} url={url} alt="Twitter" /></li>
            </ul>
        </div>
    );
}

export default SocialMediaLinks;