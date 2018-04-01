import React from 'react';
import Scrollchor from 'react-scrollchor';

const NavItem = (props) => {
    
    return(
        <li>
            <Scrollchor to={props.scrollChor} className={props.navClass} onClick={()=>props.setActive(props.name)}>
                {props.name}
            </Scrollchor>
        </li>
    )
}

export default NavItem;