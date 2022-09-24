import Icons from 'components/Icons';
import React from 'react';
import styles from './Album.module.css';

// props = { album }
const AlbumComponent = (props) => {
  const imgSrc = props.album.images[0];
  console.log(props.album.external_urls);

  return (
    <div className="album-container">
      <div className={styles.imgContainer}>
        <img className={styles.coverImg} src={imgSrc.url} alt="coverImage" />
        <Icons />
      </div>
      <a
        href={props.album.external_urls.spotify}
        target="_blank"
        rel="noreferrer"
      >
        <h1 className={styles.albumName}>{props.album.name}</h1>
      </a>

      <div className={styles.artistContainer}>
        {props.album.artists.map((artist, index) => (
          <a
            href={artist.external_urls.spotify}
            key={artist.id}
            target="_blank"
            rel="noreferrer"
          >
            <p className={styles.artistName}>
              {artist.name}
              {props.album.artists.length - 1 > index ? ', ' : ''}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default AlbumComponent;

//   return (
//     <div className="album-container">
//       <div className={styles.imgContainer}>
//         <img className={styles.coverImg} src={imgSrc.url} alt="coverImage" />
//         <Icons />
//       </div>
//       <h1 className={styles.albumName}>{props.album.name}</h1>
//       {props.album.artists.map((artist) => (
//         <p className={styles.artistName} key={artist.id}>
//           {artist.name}
//         </p>
//       ))}
//     </div>
//   );
// };
