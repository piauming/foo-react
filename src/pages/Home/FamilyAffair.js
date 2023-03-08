import React, { forwardRef } from "react";

const FamilyAffair = ({ pageData }, ref) => {
    return (
        <div ref={ref} className="container">
            <div className="section-title"> {pageData.title}</div>
            <div className="text newline-text">
                {pageData.text}
            </div>
        </div>
    );
}

export default forwardRef(FamilyAffair);