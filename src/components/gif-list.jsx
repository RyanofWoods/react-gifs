import React from 'react';
import Gif from './gif';

const GifList = (props) => {
  return (
    <div className="gif-list">
      {
        props.gifs.map(id => (<Gif id={id} />))
      }
    </div>
  );
};
0
export default GifList;
