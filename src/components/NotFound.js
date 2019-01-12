import React from 'react';
import { withRouter } from 'react-router-dom';

const NotFound = props => (
    <div className="container">
        <h1 className="not-found">Page Not Found</h1>
        <button className="home-btn" onClick={ () => props.history.push('/') }>Go Home</button>
    </div>
);

export default withRouter(NotFound);