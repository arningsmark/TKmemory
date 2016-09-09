import React from 'react';

import './Footer.css';
import New_game from './New_game.js'

const Footer = React.createClass({
  displayName: 'Footer',

  propTypes:{
    handleStartNewGame: React.PropTypes.func,
  },


  render() {
    return (
      <div className="Footer">
        <New_game handleStartNewGame={this.props.handleStartNewGame}/>
      </div>
    );
  }
})

export default Footer;
