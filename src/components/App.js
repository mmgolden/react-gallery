import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import axios from 'axios';
import apiKey from './config';

// Components
import Header from './Header';
import Gallery from './Gallery';
import Loading from './Loading';
import NoResults from './NoResults';
import NotFound from './NotFound';

class App extends Component {

    // State
    state = {
        query: '',
        showResults: false,
        loading: false,
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
        axios.get(`/.netlify/functions/photos?method=flickr.photos.search&tags=${tag}&sort=relevance&per_page=24&format=json&nojsoncallback=1`)
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
    handleSearch = (query) => {
        // Initial state
        this.setState({
            query,
            showResults: false,
            loading: true    
        });
        // If there is a query, fetch the data from Flickr
        if (query) {
            axios.get(`/.netlify/functions/photos?method=flickr.photos.search&tags=${query}&sort=relevance&per_page=24&format=json&nojsoncallback=1`)
            .then(response => {
                this.setState({
                    showResults: response.data.photos.photo.length > 0,
                    loading: false,
                    searchPhotos: response.data.photos.photo
                });
            })
            .catch(error => {
                console.log(error);
            });
        }
    }

    render() {

        // Component to render based on search results
        let componentToRender;
        if (this.state.loading) {
            componentToRender = <Loading />;
        } else if (!this.state.showResults) {
            componentToRender = <NoResults />;
        } else {
            componentToRender = <Gallery data={this.state.searchPhotos} title={this.state.query} />;
        }

        return (
            <BrowserRouter>
                <Switch>
                    {/* Handle '/' route */}
                    <Route 
                        exact 
                        path="/" 
                        render={ () => <Redirect to="/beaches" /> } 
                    />
                    {/* Handle '/beaches' route */}
                    <Route 
                        exact
                        path="/beaches" 
                        render={ () => 
                            <Fragment>
                                <Header search={this.handleSearch} />
                                <div className="container">
                                    <Gallery data={this.state.beachPhotos} title="Beaches" /> 
                                </div>
                            </Fragment>
                        } 
                    />
                    {/* Handle '/mountains' route */}
                    <Route 
                        exact
                        path="/mountains" 
                        render={ () => 
                            <Fragment>
                                <Header search={this.handleSearch} />
                                <div className="container">
                                    <Gallery data={this.state.mountainPhotos} title="Mountains" /> 
                                </div>
                            </Fragment>
                        } 
                    />
                    {/* Handle '/lakes' route */}
                    <Route 
                        exact
                        path="/lakes" 
                        render={ () => 
                            <Fragment>
                                <Header search={this.handleSearch} />
                                <div className="container">
                                    <Gallery data={this.state.lakePhotos} title="Lakes" />
                                </div> 
                            </Fragment>
                        } 
                    />
                    {/* Handle '/search/query' route */}
                    <Route 
                        exact
                        path={`/search/${this.state.query}`}
                        render={ () => 
                            <Fragment>
                                <Header search={this.handleSearch} />
                                <div className="container">
                                    {componentToRender}
                                </div>
                            </Fragment>
                        } 
                    />
                    {/* Handle '/search' route */}
                    <Route 
                        exact
                        path="/search"
                        render={ () => <Header search={this.handleSearch} /> } 
                    />
                    {/* Handle 404 error */}
                    <Route component={NotFound} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;