import React, { Component } from 'react';
import giphy from 'giphy-api';

import Searchbar from './searchbar';
import Gif from './gif';
import GifList from './gif-list';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedGif: "yFQ0ywscgobJK",
      gifs: [],
    };

    this.searchInput("homer");
  }

  searchInput = (query) => {
    giphy('Ao9T4FFJAwLdlvb12cJLFmDeFrRary9K').search({
      q: query,
      rating: 'g',
      limit: 10
    }, (_err, res) => {
      this.setState({
        gifs: res.data
      });
    });
  };

  updateSelectedGif = (id) => {
    this.setState({
      selectedGif: id,
    });
  }

  render () {
    return (
      <div>
        <div className="left-scene">
          <Searchbar searchFunction={this.searchInput} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGif} />
          </div>
        </div>
        <div className="right-scene">
          <GifList selectFunction={this.updateSelectedGif} gifs={this.state.gifs} />
        </div>
      </div>
    );
  }
}

export default App;
