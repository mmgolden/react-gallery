import React from 'react';
import SearchForm from './SearchForm';
import Navigation from './Navigation';
import PropTypes from 'prop-types';

const Header = props => (
    <header>
        <SearchForm search={props.search} />
        <Navigation />
    </header>
);

Header.propTypes = {
    search: PropTypes.func
};

export default Header;