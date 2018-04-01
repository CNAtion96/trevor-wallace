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
      navActive: [
        'active nav-link',
        'nav-link',
        'nav-link',
        'nav-link'
      ]
    };
  }

  navigate(i){
    if(i === 0){
      this.setState({
        navActive: [
          'active nav-link',
          'nav-link',
          'nav-link',
          'nav-link'
        ]
      });
      console.log('homeActive');
    }
    if(i === 1){
      this.setState({
        navActive: [
          'nav-link',
          'active nav-link',
          'nav-link',
          'nav-link'
        ]
      });
      console.log('showsActive');
    }
    if(i === 2){
      this.setState({
        navActive: [
          'nav-link',
          'nav-link',
          'active nav-link',
          'nav-link'
        ]
      });
      console.log('aboutActive');
    }
    if(i === 3){
      this.setState({
        navActive: [
          'nav-link',
          'nav-link',
          'nav-link',
          'active nav-link'
        ]
      });
      console.log('contactActive');
    }
  }
  
  render() {

    
    return (
      <div className="App">
        <Header />
        <Home />
        <Shows />
        <About />
        <Contact />
      </div>
    );
  }
}

export default App;
