import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';
import apiKey from './config';

// Components
import Header from './Header';
import Gallery from './Gallery';
import Loading from './Loading';
import NoResults from './NoResults';

class App extends Component {

    // State
    state = {
        title: '',
        showResults: true,
        loading: true,
        searchPhotos: [],
        beachPhotos: [],
        mountainPhotos: [],
        lakePhotos: []
    };

    // Flickr API Key
    key = apiKey;

    // Runs immediately after the App component is mounted
    componentDidMount() {
        this.getPhotos('beach', 'beachPhotos');
        this.getPhotos('mountain', 'mountainPhotos');
        this.getPhotos('lake', 'lakePhotos');
        this.handleSearch();
    }

    // Get the photos for beaches, mountains, and lakes
    getPhotos = (tag, photos) => {
        axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${this.key}&tags=${tag}&sort=relevance&per_page=24&format=json&nojsoncallback=1`)
        .then(response => {
            this.setState({
                [photos]: response.data.photos.photo
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
                showResults: response.data.photos.photo.length > 0,
                loading: false,
                searchPhotos: response.data.photos.photo
            });
        })
        .catch(error => {
            console.log(error);
        });
    }

    render() {

        let componentToRender;
        if (this.state.loading) {
            componentToRender = <Loading />;
        } else if (!this.state.showResults) {
            componentToRender = <NoResults />;
        } else {
            componentToRender = <Gallery data={this.state.searchPhotos} title={this.state.title} />;
        }

        return (
            <Fragment>
                <Header search={this.handleSearch} />
                <div className="container">
                    {/* Routes */}
                    <Switch>
                        <Route exact path="/" render={ () => <Gallery data={this.state.beachPhotos} title="Beaches" /> } />
                        <Route path="/beaches" render={ () => <Gallery data={this.state.beachPhotos} title="Beaches" /> } />
                        <Route path="/mountains" render={ () => <Gallery data={this.state.mountainPhotos} title="Mountains" /> } />
                        <Route path="/lakes" render={ () => <Gallery data={this.state.lakePhotos} title="Lakes" /> } />
                        <Route path="/search/:query" render={ () => componentToRender } />
                    </Switch>
                </div>
            </Fragment>
        );
    }
}

export default App;