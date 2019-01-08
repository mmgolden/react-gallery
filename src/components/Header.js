import React, { Fragment } from 'react';
import SearchForm from './SearchForm';
import Navigation from './Navigation';

const Header = props => (
    <Fragment>
        <SearchForm search={props.search} />
        <Navigation />
    </Fragment>
);

export default Header;