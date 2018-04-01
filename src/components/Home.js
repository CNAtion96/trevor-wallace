import React, {Component} from 'react';
import homeImg from '../assests/images/home_img.jpg';

class Home extends Component {

    render() {
        return(
            <div className="App-home">
                <img className="homeImg" src={homeImg} alt=""/>
                <div className="homeText">
                    <p>
                        Trevor Wallace is a stand up comedian/Actor who has appeared on MTV and Fusion. 
                        Here you can find up-and-coming shows, as well as, sketch comedy.
                    </p>
                </div>
            </div>
        )
    }
}

export default Home;