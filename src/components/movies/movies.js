import React from 'react';
import './movies.css';
import Search from '../search'

class Movies extends React.Component {

    render() {
        return (
            <div id="movies" className="movies">
                <div id="movies-container" className="movies-container">
                    <Search />
                </div>
            </div>
        )
    }
}

export default Movies;