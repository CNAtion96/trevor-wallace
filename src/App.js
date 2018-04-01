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
          scrollChor: ''
        },
        {
          name: 'Shows',
          key: 1,
          scrollChor: '#shows'
        },
        {
          name: 'About',
          key: 2,
          scrollChor: '#about'
        },
        {
          name: 'Contact',
          key: 3,
          scrollChor: '#contact'
        }
      ],
      navActive: [
        'active nav-link',
        'nav-link',
        'nav-link',
        'nav-link'
      ]
    };
  }

  navigate(i) {
    if(i === 0){
      this.setState({
        navActive: [
          'active',
          '',
          '',
          ''
        ]
      });
    }
    if(i === 1){
      this.setState({
        navActive: [
          '',
          'active',
          '',
          ''
        ]
      });
    }
    if(i === 2){
      this.setState({
        navActive: [
          '',
          '',
          'active',
          ''
        ]
      });
    }
    if(i === 3){
      this.setState({
        navActive: [
          '',
          '',
          '',
          'active'
        ]
      });
    }
  }
  render() {
    return (
      <div className="App">
        <Header navItems={this.state.navItems} activeNav={this.state.navActive}/>
        <Home />
        <Shows />
        <About />
        <Contact />
      </div>
    );
  }
}

export default App;
