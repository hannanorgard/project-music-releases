import Icons from 'components/Icons';
import Artists from 'components/Artists';
import React from 'react';
import styles from './Album.module.css';

// props = { album }
const AlbumComponent = (props) => {
  const imgSrc = props.album.images[0];

  return (
    <div className="album-container">
      <div className={styles.imgContainer}>
        <img className={styles.coverImg} src={imgSrc.url} alt="coverImage" />
        <Icons url={props.album.external_urls.spotify} />
      </div>
      <a
        href={props.album.external_urls.spotify}
        target="_blank"
        rel="noreferrer"
      >
        <h1 className={styles.albumName}>{props.album.name}</h1>
      </a>
      <Artists artists={props.album.artists} />
    </div>
  );
};

export default AlbumComponent;
