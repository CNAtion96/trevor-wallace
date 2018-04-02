import React, {Component} from 'react';

class Shows extends Component {

    render() {
        return(
            <div className="App-shows col-sm-12" id="shows">
                <h1 className="title col-sm-12"> Upcoming Shows </h1>
                <ul className="showList col-sm-12">
                    <li className="col-sm-12">
                        <div className="showItem col-md-12">
                            <h3 className="col-md-5">Location - Date - Time</h3>
                            <div className="col-md-5" style={{display: 'inline-block'}}></div>
                            <button className="col-md-2"> Buy Tickets </button>
                        </div>
                    </li>
                    <li className="col-sm-12">
                        <div className="showItem col-md-12">
                            <h3 className="col-md-5">Location - Date - Time</h3>
                            <div className="col-md-5" style={{display: 'inline-block'}}></div>
                            <button className="col-md-2"> Buy Tickets </button>
                        </div>
                    </li>
                    <li className="col-sm-12">
                        <div className="showItem col-md-12">
                            <h3 className="col-md-5">Location - Date - Time</h3>
                            <div className="col-md-5" style={{display: 'inline-block'}}></div>
                            <button className="col-md-2"> Buy Tickets </button>
                        </div>
                    </li>
                    <li className="col-sm-12">
                        <div className="showItem col-md-12">
                            <h3 className="col-md-5">Location - Date - Time</h3>
                            <div className="col-md-5" style={{display: 'inline-block'}}></div>
                            <button className="col-md-2"> Buy Tickets </button>
                        </div>
                    </li>
                    <li className="col-sm-12">
                        <div className="showItem col-md-12">
                            <h3 className="col-md-5">Location - Date - Time</h3>
                            <div className="col-md-5" style={{display: 'inline-block'}}></div>
                            <button className="col-md-2"> Buy Tickets </button>
                        </div>
                    </li>
                    <li className="col-sm-12">
                        <div className="showItem col-md-12">
                            <h3 className="col-md-5">Location - Date - Time</h3>
                            <div className="col-md-5" style={{display: 'inline-block'}}></div>
                            <button className="col-md-2"> Buy Tickets </button>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Shows;