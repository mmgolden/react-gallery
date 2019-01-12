import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => (
    <nav className="main-nav">
        <ul>
            <li><NavLink to="/beaches">Beaches</NavLink></li>
            <li><NavLink to="/mountains">Mountains</NavLink></li>
            <li><NavLink to="/lakes">Lakes</NavLink></li>
        </ul>
    </nav>
);

export default Navigation;