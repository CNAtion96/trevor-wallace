import React from 'react';
import twistedImg from '../assests/images/twisted.png';
import NavLink from './NavLink';
import {Row, Col} from 'reactstrap';

const Header = (props) => {

    let navList = props.navItems.map( (data) => {
        let isActive = props.activeLink === data.name;
        console.log(isActive);
        let navClass = isActive ? 'active nav-link col-sm-4' : 'nav-link col-sm-4';
        return(
            <NavLink
                key={data.key}
                name={data.name}
                scrollChor={data.scrollChor}
                navClass={navClass}
                onClick={props.onClick}
            />
        )
    })
    
    return(
        <header className="App-header col-sm-12">
            
            <h1 className="name col-sm-12">
                Trevor <img src={twistedImg} className="twistedImg" alt=""/> Wallace
            </h1>
            <ul className="App-nav col-sm-12">
                { navList }
            </ul>
        </header>
    )
}

export default Header; 