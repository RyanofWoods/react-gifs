import React from 'react';
import Gif from './gif';

const GifList = ({ gifs, selectFunction }) => {
  return (
    <div className="gif-list">
      {
        gifs.map((gifData) => {
          return <Gif id={gifData.id} key={gifData.id} selectFunction={selectFunction} />;
        })
      }
    </div>
  );
};

export default GifList;
