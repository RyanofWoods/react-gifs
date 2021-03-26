import React, { Component } from 'react';
import Gif from './gif';

class GifList extends Component {
  render() {
    return (
      <div className="gif-list">
        {
          this.props.gifs.map(gifData => (<Gif id={gifData.id} key={gifData.id} selectFunction={this.props.selectFunction} />))
        }
      </div>
    );
  }
}

export default GifList;
