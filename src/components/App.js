import React, { Component } from 'react';
import axios from 'axios';
import apiKey from './config';
import Header from './Header';
import Gallery from './Gallery';

class App extends Component {

    // State
    state = {
        photos: []
    };

    componentDidMount() {
        // Flickr API Key
        const key = apiKey;

        // Flickr tag
        const tag = 'dog';

        // Fetch the data from Flickr
        axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${key}&tags=${tag}&per_page=24&format=json&nojsoncallback=1`)
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
                <Header />
                <Gallery data={this.state.photos} />
            </div>
        );
    }
}

export default App;