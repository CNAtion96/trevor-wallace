import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Shows from './components/Shows';
import About from './components/About';
import Contact from './components/Contact';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      navItems: [
          {
            name: 'Home',
            key: 0,
            scrollChor: '#home',
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
        activeLink: 'Home',
        isOpen: false
    };
  }

  onNavItemClick = (link) => {
    this.setState({activeLink: link});
    console.log(this.state.activeLink);
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  
  render() {

    
    return (
      <div className="App container-fluid">
        <Header 
          onClick={this.onNavItemClick}
          navItems={this.state.navItems}
          activeLink={this.state.activeLink}
          toggle={this.toggle}
          isOpen={this.state.isOpen}
        />
        <Home />
        <Shows />
        <About />
        <Contact />
      </div>
    );
  }
}

export default App;
