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
        id: ''
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
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=92e3009a273b724b7b23754ceabd0fac&language=en-US&query=${value}&page=1&include_adult=false&`)
            .then(res => res.json())
            .then(res => fetch(`https://api.themoviedb.org/3/movie/${res.results[0].id}?api_key=92e3009a273b724b7b23754ceabd0fac&language=en-US`))
            .then(res => res.json())
            .then(res => this.displayFunction(res))
    }

    displayFunction = (apiData) => {
        const image = `https://image.tmdb.org/t/p/w220_and_h330_face/${apiData.poster_path}`;
        const link = apiData.Website;
        const title = apiData.title;
        const year = apiData.release_date;
        const rated = apiData.Rated;
        const actors = apiData.Actors;
        const plot = apiData.overview;
        // const link = apiData.Website;
        const noLink = document.getElementById('search-span')
        console.log(apiData);

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

        return ( <
            div id = 'search'
            className = 'search' >
            <
            input type = 'text'
            className = 'search-input'
            id = 'search-input'
            onKeyDown = {
                this.enterFunction
            } >
            <
            /input> <
            button className = 'search-button'
            id = 'search-button'
            onClick = {
                this.searchFunction
            } > Search < /button> <
            hr / >
            <
            div className = 'search-results'
            id = 'search-results' >
            <
            div id = 'search-results-container1'
            className = 'search-results-container1' >
            <
            div > < span className = 'important-word' > Title: < /span><span id='search-container1-info1' className='search-container1-info'>{this.state.title}</span > < /div> <
            div > < span className = 'important-word' > Year: < /span><span id='search-container1-info2' className='search-container1-info'>{this.state.year}</span > < /div> <
            div > < span className = 'important-word' > Rated: < /span><span id='search-container1-info3' className='search-container1-info'>{this.state.rated}</span > < /div> <
            div > < span className = 'important-word' > Actors: < /span><span id='search-container1-info4' className='search-container1-info'>{this.state.actors}</span > < /div> <
            div > < span className = 'important-word' > Plot: < /span><span id='search-container1-info5' className='search-container1-info'>{this.state.plot}</span > < /div> <
            /div> <
            div id = 'search-results-container2'
            className = 'search-results-container2' >
            <
            a id = 'search-link'
            className = 'search-link'
            href = {
                this.state.link
            } > < img className = 'search-image'
            id = 'search-image'
            src = {
                this.state.image
            } > < /img></a >
            <
            span hidden id = 'search-span' > No link Available < /span> <
            /div>

            <
            /div> <
            /div>
        )
    }
}

export default Search;