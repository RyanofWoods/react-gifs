import React, { Component } from 'react';

class Searchbar extends Component {
  handleUpdate = (event) => {
    this.props.searchFunction(event.target.value);
  }

  render() {
    return (
      <input type="text" className="form-search" placeholder="search for a gif" onChange={this.handleUpdate} />
    );
  }
}

export default Searchbar;
