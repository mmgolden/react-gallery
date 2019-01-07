import React from 'react';

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

export default GalleryItem;