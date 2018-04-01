import React, {Component} from 'react';

class Shows extends Component {

    render() {
        return(
            <div className="App-shows" id="shows">
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
        )
    }
}

export default Shows;