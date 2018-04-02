
import React, {Component} from 'react';
import twistedImg from '../assests/images/twisted.png';
import Nav from './Nav';

const Header = (props) => {
    return(
        <header className="App-header">
            <h1 className="name">Trevor<img src={twistedImg} className="twistedImg"/> Wallace</h1>
            <Nav />
        </header>
    )
}

export default Header; 
