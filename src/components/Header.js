import React, { Component } from 'react';
import twistedImg from '../assests/images/twisted.png';
import Scrollchor from 'react-scrollchor';

const Header = (props) => {

    

    return(
        <header className="App-header">
            <h1 className="name">Trevor<img src={twistedImg} className="twistedImg"/> Wallace</h1>
            <ul className="App-nav">
                <li>
                    <Scrollchor to="" className="nav-link">
                        Home
                    </Scrollchor>
                </li>
                <li>
                    <Scrollchor to="#shows"  className="nav-link">
                        Shows
                    </Scrollchor>
                </li>
                <li>
                    <Scrollchor to="#about"  className="nav-link">
                        About
                    </Scrollchor>
                </li>
                <li>
                    <Scrollchor to="#contact"  className="nav-link">
                        Contact
                    </Scrollchor>
                </li>
            </ul>
        </header>
    )
}

export default Header;