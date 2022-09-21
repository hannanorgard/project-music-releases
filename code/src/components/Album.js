import React from 'react';

export const AlbumComponent = (props) => {
    const imgSrc = props.album.images[0];

    return (
        <div className="album-container">
          <img className="cover-img" src={imgSrc.url} alt="coverImage" />
          <h1 className="album-name">{props.album.name} </h1>
          {props.album.artists.map((artist) => (
            <p className="artist-name" key={artist.id}>
              {artist.name}
            </p>
          ))}
        </div>
      );
    };