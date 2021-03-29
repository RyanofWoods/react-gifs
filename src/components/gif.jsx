/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component } from 'react';

class Gif extends Component {
  handleClick = () => {
    const { id, selectFunction } = this.props;
    selectFunction(id);
  }

  render() {
    const { id } = this.props;
    const src = `https://media2.giphy.com/media/${id}/giphy.gif`;
    return (
      <img className="gif" src={src} alt="" onClick={this.handleClick} />
    );
  }
}

export default Gif;
