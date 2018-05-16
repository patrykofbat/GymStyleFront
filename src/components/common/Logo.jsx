import React from 'react';
import logo from "../../assets/images/gymStyleIcon.png"

const Logo = (props) => {
    return(
        <div className="logo">
            <img src={logo} alt="Logo" />
        </div>
    );
};

export default Logo;
