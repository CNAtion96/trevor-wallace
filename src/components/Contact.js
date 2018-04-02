import React, {Component} from 'react';

class Contact extends Component{

    render(){
        return(
            <div className="App-contact" id="contact">
                <h1 className="title contact"> Contact </h1>
                <div className="social">
                    <a href="https://www.facebook.com/TrevorWallaceComedy/" target="_blank">
                        <i className="fa fa-facebook" aria-hidden="true"></i>
                    </a>
                    <a href="https://twitter.com/TrevWall" target="_blank">
                        <i className="fa fa-twitter" aria-hidden="true"></i>
                    </a>
                    <a href="https://www.instagram.com/TrevorWallace/" target="_blank">
                        <i className="fa fa-instagram" aria-hidden="true"></i>
                    </a>
                    <a href="https://www.youtube.com/channel/UCc35WvHmQjLE8NN4Y_ITmUQ" target="_blank">
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
        )
    }
}

export default Contact;