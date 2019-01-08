import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => (
    <nav className="main-nav">
        <ul>
            <li><NavLink to="/search/beaches">Beaches</NavLink></li>
            <li><NavLink to="/search/mountains">Mountains</NavLink></li>
            <li><NavLink to="/search/lakes">Lakes</NavLink></li>
        </ul>
    </nav>
);

export default Navigation;