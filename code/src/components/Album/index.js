import Icons from 'components/Icons';
import React from 'react';
import styles from './Album.module.css';

// props = { album }
const AlbumComponent = (props) => {
  const imgSrc = props.album.images[0];

  return (
    <div className="album-container">
      <div className={styles.imgContainer}>
        <img className={styles.coverImg} src={imgSrc.url} alt="coverImage" />
        <Icons />
      </div>
      <h1 className={styles.albumName}>{props.album.name}</h1>
      <div className={styles.artistContainer}>
        {props.album.artists.map((artist, index) => {
          return (
            <a href={artist.external_urls.spotify}>
              <p className={styles.artistName} key={artist.id}>
                {artist.name}
                <span>
                  {props.album.artists.length - 1 > index ? ', ' : ''}
                </span>
              </p>
            </a>
          );
        })}
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
