import React from 'react';
import SearchForm from './SearchForm';
import Navigation from './Navigation';

const Header = props => (
    <header>
        <SearchForm search={props.search} />
        <Navigation />
    </header>
);

export default Header;