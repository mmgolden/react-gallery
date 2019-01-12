import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Components
import App from './App';
import NotFound from './NotFound';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/beaches" component={App} />
            <Route path="/mountains" component={App} />
            <Route path="/lakes" component={App} />
            <Route path="/search" component={App} />
            <Route path="/search/:query" component={App} />
            {/* Handle 404 errors */}
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
);

export default Router;