import React, { forwardRef } from "react";

const HarleyRiders = ({pageData, isMobile}, ref) => {
    return (
        <div ref={ref} className="container">
            <div className="intro newline-text"> {isMobile ? pageData.titleMobile : pageData.title}</div>
            <div className="text newline-text">
                {pageData.text}
            </div>
        </div>
    );
}

export default forwardRef(HarleyRiders);