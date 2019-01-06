import React, { Fragment } from 'react';
import SearchForm from './SearchForm';
import Navigation from './Navigation';

const Header = () => (
    <Fragment>
        <SearchForm />
        <Navigation />
    </Fragment>
);

export default Header;