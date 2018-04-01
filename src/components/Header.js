import React, {Component} from 'react';
import twistedImg from '../assests/images/twisted.png';
import NavItem from './NavItem';

class Header extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            navItems: [
                {
                  name: 'Home',
                  key: 0,
                  scrollChor: '',
                },
                {
                  name: 'Shows',
                  key: 1,
                  scrollChor: '#shows',
                },
                {
                  name: 'About',
                  key: 2,
                  scrollChor: '#about',
                },
                {
                  name: 'Contact',
                  key: 3,
                  scrollChor: '#contact',
                }
              ],
            activeLink: 'Home'
        };
    }
    

    setActive = (link) => this.setState({active: link});
    
    
    render(){
        
        let navList = this.state.navItems.map( (navItem) => {
            let isActive = this.state.activeLink === navItem.name;
            let navClass = isActive ? 'active nav-link' : 'nav-link';
            return(
                <NavItem 
                    key={navItem.key}
                    name={navItem.name}
                    scrollChor={navItem.scrollChor}
                    navClass={navClass}
                    setActive={this.setActive}
                />
            )
        });
        

        return(
            <header className="App-header">
                <h1 className="name">
                    Trevor<img src={twistedImg} className="twistedImg" alt=""/> Wallace
                </h1>
                <ul className="App-nav">
                    { navList }
                </ul>
            </header>
        )
    }
}

export default Header; 

// let path = window.location.pathname;

//     const changePath = (newPath) => {
//         path = window.location.pathname + newPath;
//         console.log(path);
//     }

