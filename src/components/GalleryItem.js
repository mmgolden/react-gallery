import React from 'react';
import PropTypes from 'prop-types';

const GalleryItem = props => {

    // Get the props
    const {farmID, serverID, id, secret, title} = props;

    // Return a list item with an image
    return (
        <li>
            <img src={`https://farm${farmID}.staticflickr.com/${serverID}/${id}_${secret}.jpg`} alt={title} />
        </li>
    );
};

GalleryItem.propTypes = {
    farmID: PropTypes.number,
    serverID: PropTypes.string,
    id: PropTypes.string,
    secret: PropTypes.string,
    title: PropTypes.string
};

export default GalleryItem;