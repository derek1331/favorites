import React from 'react';
import './header.css';
import { NavLink } from "react-router-dom";

class Header extends React.Component {

    render() {
        return (
            <div id="header" className="header">
                <div id="header-container" className="header-container">
                    <div id="header-navigation" className="header-navigation">
                        <NavLink id="header-links1" className="header-links" to="/movies">Movies</NavLink>
                        <NavLink id="header-links2" className="header-links" to="/tv">TV</NavLink>
                        <NavLink id="header-links3" className="header-links" to="/music">Music</NavLink>
                    </div>
                    <div id="header-search" className="header-search">
                            <input type="text"/>
                            <button>$</button>
                        </div>
                </div>
            </div>
        )
    }
}

export default Header;          