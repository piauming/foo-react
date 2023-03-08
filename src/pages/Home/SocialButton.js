import React from "react";

const SocialButton = ({src, url, alt}) => {
    return (
        <div>
            <a href={url} target="_blank" rel="noopener noreferrer">
                <img className="socialButton" src={src} alt={alt} />
            </a>
        </div>
    );
}

export default SocialButton;