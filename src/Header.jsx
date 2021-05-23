import React from 'react';
import logo from './images/logo.png';

const Header = () =>{
    return(
        <>
            <div className="header">
                <img src={logo} alt="logo" width="100px" height="100px"/>
                <h1 className="head"> Rajbir keep </h1>
            </div>
        </>
    );
};

export default Header;