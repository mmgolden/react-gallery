import React from 'react';
import GalleryItem from './GalleryItem';
import NotFound from './NotFound';

const Gallery = props => {

    const photos = props.data.map(photo => 
        <GalleryItem 
            farmID={photo.farm} 
            serverID={photo.server}
            id={photo.id}
            secret={photo.secret}
            title={photo.title}
            key={photo.id}
        />
    );

    return (
        <div className="photo-container">
            <h2>Results</h2>
            <ul>
                {/* Photo gallery */}
                {photos}
            </ul>
        </div>
    );
};

export default Gallery;