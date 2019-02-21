import React from 'react';
import './tv.css';

class TV extends React.Component {

    render() {
        return (
            <div>
                <input className="" id=""></input>
                <button className="" id="" onClick={this.addToList}></button>
                <ul className="newList" id="newList">

                </ul>
            </div>
        )
    }
}

export default TV;