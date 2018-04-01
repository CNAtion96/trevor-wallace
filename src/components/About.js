import React, {Component} from 'react';
import aboutImg from '../assests/images/about_img.jpg';

class About extends Component {

    render(){
        return(
            <div className="App-about" id="about">
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
        )
    }
}

export default About;