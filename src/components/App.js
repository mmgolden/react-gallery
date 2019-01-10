import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';
import apiKey from './config';

// Components
import Header from './Header';
import Gallery from './Gallery';
import NoResults from './NoResults';

class App extends Component {

    // State
    state = {
        title: '',
        searchPhotos: [],
        beachPhotos: [],
        mountainPhotos: [],
        lakePhotos: []
    };

    // Flickr API Key
    key = apiKey;

    // Runs immediately after the App component is mounted
    componentDidMount() {
        this.handleBeach();
        this.handleMountain();
        this.handleLake();
        this.handleSearch();
    }

    // Get beach photos
    handleBeach = () => {
        // Fetch the data from Flickr
        axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${this.key}&tags=beach&sort=relevance&per_page=24&format=json&nojsoncallback=1`)
        .then(response => {
            this.setState({
                beachPhotos: response.data.photos.photo
            });
        })
        .catch(error => {
            console.log(error);
        });
    }

    // Get mountain photos
    handleMountain = () => {
        // Fetch the data from Flickr
        axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${this.key}&tags=mountain&sort=relevance&per_page=24&format=json&nojsoncallback=1`)
        .then(response => {
            this.setState({
                mountainPhotos: response.data.photos.photo
            });
        })
        .catch(error => {
            console.log(error);
        });
    }

    // Get lake photos
    handleLake = () => {
        // Fetch the data from Flickr
        axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${this.key}&tags=lake&sort=relevance&per_page=24&format=json&nojsoncallback=1`)
        .then(response => {
            this.setState({
                lakePhotos: response.data.photos.photo
            });
        })
        .catch(error => {
            console.log(error);
        });
    }

    // Get photos from search
    handleSearch = (query = 'beaches') => {
        // Fetch the data from Flickr
        axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${this.key}&tags=${query}&sort=relevance&per_page=24&format=json&nojsoncallback=1`)
        .then(response => {
            this.setState({
                title: query,
                searchPhotos: response.data.photos.photo
            });
        })
        .catch(error => {
            console.log(error);
        });
    }

    render() {
        return (
            <div className="container">
                <Header search={this.handleSearch} />
                {/* Routes */}
                <Switch>
                    <Route exact path="/" render={ () => <Gallery data={this.state.beachPhotos} title="Beaches" /> } />
                    <Route exact path="/search/beaches" render={ () => <Gallery data={this.state.beachPhotos} title="Beaches" /> } />
                    <Route exact path="/search/mountains" render={ () => <Gallery data={this.state.mountainPhotos} title="Mountains" /> } />
                    <Route exact path="/search/lakes" render={ () => <Gallery data={this.state.lakePhotos} title="Lakes" /> } />
                    <Route path="/search/:query" render={ () => <Gallery data={this.state.searchPhotos} title={this.state.title} /> } />
                    <Route component={NoResults} />
                </Switch>
            </div>
        );
    }
}

export default App;