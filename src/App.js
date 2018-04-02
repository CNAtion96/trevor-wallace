import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Shows from './components/Shows';
import About from './components/About';
import Contact from './components/Contact';

class App extends Component {
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
