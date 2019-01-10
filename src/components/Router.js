import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Components
import App from './App';
import NotFound from './NotFound';

const Router = () => (
    <BrowserRouter>
        <Switch>
            {/* Handle "/" route */}
            <Route exact path="/" component={App} />
            {/* Handle "/search" route */}
            <Route exact path="/search" component={App} />
            {/* Handle "/search/query" route */}
            <Route path="/search/:query" component={App} />
            {/* Handle 404 errors */}
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
);

export default Router;