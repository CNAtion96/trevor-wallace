import React, { Component } from 'react';
import './App.css';
import homeImg from './home_img.jpg';
import aboutImg from './about_img.jpg';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      navActive: [
        'active',
        '',
        '',
        ''
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
        <header className="App-header">
          <h1 className="name">Trevor Wallace</h1>
          <ul className="App-nav">
            <li className={this.state.navActive[0]}>
              Home
            </li>
            <li className={this.state.navActive[1]}>
              Shows
            </li>
            <li className={this.state.navActive[2]}>
              About
            </li>
            <li className={this.state.navActive[3]}>
              Contact
            </li>
          </ul>
        </header>
        <div className="App-home">
          <img className="homeImg" src={homeImg} alt=""/>
          <div className="homeText">
            <p>
            Trevor Wallace is a stand up comedian/Actor who has appeared on MTV and Fusion. 
            Here you can find up-and-coming shows, as well as, sketch comedy.
            </p>
          </div>
        </div>
        <div className="App-shows">
        <h1 className="title"> Upcoming Shows </h1>
          <ul className="showList">
            <li>
              <div className="showItem">
                <h3>Location - Date - Time</h3>
                <button> Buy Tickets </button>
              </div>
            </li>
            <li>
              <div className="showItem">
                <h3>Location - Date - Time</h3>
                <button> Buy Tickets </button>
              </div>
            </li>
            <li>
              <div className="showItem">
                <h3>Location - Date - Time</h3>
                <button> Buy Tickets </button>
              </div>
            </li>
            <li>
              <div className="showItem">
                <h3>Location - Date - Time</h3>
                <button> Buy Tickets </button>
              </div>
            </li>
            <li>
              <div className="showItem">
                <h3>Location - Date - Time</h3>
                <button> Buy Tickets </button>
              </div>
            </li>
            <li>
              <div className="showItem">
                <h3>Location - Date - Time</h3>
                <button> Buy Tickets </button>
              </div>
            </li>
          </ul>
        </div>
        <div className="App-about">
        <h1 className="title"> About </h1>
          <img className="aboutImg" src={aboutImg} alt=""/>
          <div className="aboutText">
            <p>
            Wallace is a founding member of the San Jose State University Stand Up Comedy Club. 
            Wallace has performed at clubs all over the Bay Area, Ventura County and Los Angeles 
            opening for national headliners from Comedy Central, MTV, VH1, HBO, and Showtime. 
            Although, his greatest achievement is being told "You've got beautiful hair" by Todd Glass.
            </p>
          </div>
        </div>
        <div className="App-contact">
          <h1 className="title contact"> Contact </h1>
          <div className="social">
            <a href="#" target="_blank">
              <i className="fa fa-facebook" aria-hidden="true"></i>
            </a>
            <a href="#" target="_blank">
              <i className="fa fa-twitter" aria-hidden="true"></i>
            </a>
            <a href="#" target="_blank">
              <i className="fa fa-instagram" aria-hidden="true"></i>
            </a>
            <a href="#" target="_blank">
              <i className="fa fa-youtube-play" aria-hidden="true"></i>
            </a>
          </div>
          <form>
            <div>
              <input type="text" placeholder="First Name"/>
              <input type="text" placeholder="Last Name"/>
            </div>
            <input type="text" id="subject" placeholder="Subject"/>
            <textarea type="text" placeholder="Message"/>
            <input type="Submit" id="submit"/>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
