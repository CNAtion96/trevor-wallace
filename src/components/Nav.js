import React from 'react';
import Scrollchor from 'react-scrollchor';

const NavItems = [{
    target: "",
    text: "Home"
},{
    target: "#shows",
    text: "Shows"
},{
    target: "#about",
    text: "About"
},{
    target: "#contact",
    text: "Contact"
}];

export default class Nav extends React.Component {
    state = {
        currentLink: ""
    }

    render () {
        return (
            <ul className="App-nav">
                {NavItems.map(item => (
                    <NavItem key={item.text}
                             isActive={item.target === this.state.currentLink}
                             target={item.target}
                             text={item.text}
                             onClick={this.onNavItemClick} />
                ))}
            </ul>
        )
    }

    onNavItemClick = target => this.setState({currentLink: target})
}

const NavItem = props => {
    const className = props.isActive ? "nav-link active" : "nav-link";

    return (
        <li className={className}>
            <Scrollchor className={className}
                        to={props.target}
                        afterAnimate={() => props.onClick(props.target)}>
                {props.text}
            </Scrollchor>
        </li>
    );
}
