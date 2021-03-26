/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import giphy from 'giphy-api';

import Search from './search';
import Gif from './gif';
import GifList from './gif-list';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: "yFQ0ywscgobJK",
      gifs: [],
    };
    this.searchInput('homer simpson');
  }

  searchInput = (query) => {
    giphy('Ao9T4FFJAwLdlvb12cJLFmDeFrRary9K').search({
      q: { query },
      rating: 'g',
      limit: 10
    }, (_err, res) => {
      this.setState({ gifs: res.data.map(data => data.id) });
    });
  };

  render () {
    return (
      <div>
        <div className="left-scene">
          <Search onChange={this.searchInput} />
          <div className="selected-gif">
            <Gif id={ this.state.selected } />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={ this.state.gifs }></GifList>
        </div>
      </div>
    );
  }
}

export default App;
