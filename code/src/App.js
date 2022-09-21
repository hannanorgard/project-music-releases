import React from 'react';
import { AlbumComponent } from 'components/Album';
import Header from 'components/Header';

import data from './data.json';

console.log(data);

export const App = () => {
  return (
    <>
      <Header />
      <div className="grid-parent">
        {data.albums.items.map((singleAlbum) => (
          <AlbumComponent key={singleAlbum.id} album={singleAlbum} />
        ))}
      </div>
    </>
  );
};
export default App;
