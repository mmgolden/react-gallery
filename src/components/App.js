import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';
import apiKey from './config';

// Components
import Header from './Header';
import Gallery from './Gallery';
import NotFound from './NotFound';

class App extends Component {

    // State
    state = {
        photos: []
    };

    componentDidMount() {
        this.search();
    }

    search = (query = 'beaches') => {
        // Flickr API Key
        const key = apiKey;

        // Fetch the data from Flickr
        axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${key}&tags=${query}&sort=relevance&per_page=24&format=json&nojsoncallback=1`)
        .then(response => {
            this.setState({
                photos: response.data.photos.photo
            });
        })
        .catch(error => {
            console.log(error);
        });
    }

    render() {
        return (
            <div className="container">
                <Header search={this.search} />
                {/* Routes */}
                <Switch>
                    <Route exact path="/" render={ () => <Gallery data={this.state.photos} /> } />
                    <Route path="/search/:query" render={ () => <Gallery data={this.state.photos} /> } />
                    <Route component={NotFound} />
                </Switch>    
            </div>
        );
    }
}

export default App;