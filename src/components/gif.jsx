import React, { Component } from 'react';
import Search from './search';

class Gif extends Component {
  buildGifSrc () {
    return `https://media2.giphy.com/media/${this.props.id}/giphy.gif`;
  }

  render() {
    return <img className="gif" src={this.buildGifSrc()} alt="" />;
  }
}

export default Gif;
