import React from 'react';
import './search.css';


class Search extends React.Component {

    state = {
        image: '',
        link: '',
        title: '',
        year: '',
        rated: '',
        actors: '',
        plot: '',
    }

    enterFunction = (e) => {
        let x = e.keyCode;
        if (x === 13) {
            this.searchFunction();
        }

    }

    searchFunction = () => {
        const inputSearch = document.getElementById('search-input')
        const value = inputSearch.value
        fetch(`http://www.omdbapi.com/?t=${value}&apikey=447f330`)
            .then(res => res.json())
            .then(res => {
                this.displayFunction(res)
                console.log(res)
            })
            .catch(error => {
                console.log(error)
            })

    }

    displayFunction = (apiData) => {
        const image = apiData.Poster;
        const link = apiData.Website;
        const title = apiData.Title;
        const year = apiData.Year;
        const rated = apiData.Rated;
        const actors = apiData.Actors;
        const plot = apiData.Plot;
        // const link = apiData.Website;
        const noLink = document.getElementById('search-span')
        if (apiData.Response === 'False') {
            alert('no title fix me pls')
        } else {
            if (image === 'N/A') {
                alert('no post available fix me')
            } else if (link === 'N/A' || null) {
                noLink.style.display = 'initial'
            } else {
                this.setState({
                    image,
                    link,
                    title,
                    year,
                    rated,
                    actors,
                    plot
                })
            }

        }

    }

    render() {

        return (
            <div id='search' className='search'>
                <input type='text' className='search-input' id='search-input' onKeyDown={this.enterFunction}>
                </input>
                <button className='search-button' id='search-button' onClick={this.searchFunction}>Search</button>
                <hr />
                <div className='search-results' id='search-results'>
                    <div id='search-results-container1' className='search-results-container1'>
                        <div><span className='important-word'>Title: </span><span id='search-container1-info1' className='search-container1-info'>{this.state.title}</span></div>
                        <div><span className='important-word'>Year: </span><span id='search-container1-info2' className='search-container1-info'>{this.state.year}</span></div>
                        <div><span className='important-word'>Rated: </span><span id='search-container1-info3' className='search-container1-info'>{this.state.rated}</span></div>
                        <div><span className='important-word'>Actors: </span><span id='search-container1-info3' className='search-container1-info'>{this.state.actors}</span></div>
                        <div><span className='important-word'>Plot: </span><span id='search-container1-info3' className='search-container1-info'>{this.state.plot}</span></div>
                    </div>
                    <div id='search-results-container2' className='search-results-container2'>
                        <a id='search-link' className='search-link' href={this.state.link}><img className='search-image' id='search-image' src={this.state.image}></img></a>
                        <span hidden id='search-span'>No link Available</span>
                    </div>

                </div>
            </div>
        )
    }
}

export default Search;