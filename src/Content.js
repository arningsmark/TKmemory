import _ from 'lodash'
import React from 'react';

import './Content.css';
import Card from './Card.js'

const Content = React.createClass({
  displayName: 'Content',

  propTypes: {
    cards: React.PropTypes.object,
    numberOfCards: React.PropTypes.number,
    flipCard: React.PropTypes.func,
  },

  getCard(card) {
    return (
      <Card
        key={card.id}
        id={card.id}
        image={card.image}
        isFlipped={card.isFlipped}
        flipCard={this.props.flipCard} //inga parentesen för att vi inte vil köra funktionen utan bara skicka med den
        />
    )
  },

  renderCards() {
    //console.log('antal kort: ', this.props.numberOfCards)
    return (
      _.map(this.props.cards, this.getCard)
    )
  },

  render() {
    return (
      <div className="Content">
        {this.renderCards()}
      </div>
    );
  }
})

export default Content;
