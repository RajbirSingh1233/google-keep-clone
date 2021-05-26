import React from 'react';
import logo2 from './images/logo2.png';

const Header = () =>{
    return(
        <>
            <div className="header">
                <img src={logo2} style={{background:'white',borderRadius:'15px'}} alt="logo" width="100px" height="100px"/>
                <h1 className="head"> Google Keep Clone... </h1>
            </div>
        </>
    );
};

export default Header;