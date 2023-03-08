import React, { useState } from "react";

import hamMenu from '../../assets/images/hamMenu.svg';
import crossMenu from '../../assets/images/crossMenu.svg';

const Navbar = ({ clickHandler, pageData }) => {
    const menuSize = pageData.length;
    const [menuSelected, setMenuSelected] = useState(false);

    const handleClick = (e, id) => {
        e.preventDefault();
        setMenuSelected(false);
        clickHandler(id);
    }

    const toggleState = (e) => {
        e.preventDefault();
        setMenuSelected(!menuSelected);
    }

    const dismissNavbar = (e) => {
        e.preventDefault()
        setMenuSelected(!menuSelected);
    }

    return (
        <div className="nav">
            {
                menuSelected &&
                <div>
                    <div style={{ position:'absolute', width: '100%', height: '100vh' }} onClick={dismissNavbar}/>
                    <div className="menu">
                        <ul>
                            {
                                pageData.map((item, index) => {
                                    const cName = (index != menuSize - 1) ? "separator" : null;
                                    return (<li className={cName} key={index} onClick={(e) => handleClick(e, item.id)}>{item.label}</li>)
                                })
                            }
                        </ul>
                    </div>
                </div>

            }
            <div className="nav-button" onClick={toggleState}>
                {!menuSelected && <img className="menu-image" src={hamMenu} alt="Menu" />}
                {menuSelected && <img className="menu-cross-image" src={crossMenu} alt="Menu" />}
            </div>
        </div>
    );

}

export default Navbar;