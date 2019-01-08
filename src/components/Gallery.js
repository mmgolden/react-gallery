import React from 'react';
import GalleryItem from './GalleryItem';

const Gallery = props => {

    // Get the photos from props
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
            <h2>{props.title}</h2>
            <ul>
                {/* Photo gallery */}
                {photos}
            </ul>
        </div>
    );
};

export default Gallery;