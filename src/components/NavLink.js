import React from 'react';
import Scrollchor from 'react-scrollchor';

const NavLink = (props) => {
    const click = props.onClick;
    return(
        <button  onClick={()=>click(props.name)}>
            <Scrollchor to={props.scrollChor} className={props.navClass}>
                {props.name}
            </Scrollchor>
        </button>
    )
}

export default NavLink;