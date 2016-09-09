import React from 'react';

import './New_game.css';

const New_game = React.createClass({
  displayName: 'New_game',

  render() {
    return (
      <div className="New_game">
        <button onClick={this.props.handleStartNewGame.bind(null,4)}>
        Starta nytt spel!
        </button>
      </div>
    );
  }
})

export default New_game;
