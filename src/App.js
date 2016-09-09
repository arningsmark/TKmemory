import _ from 'lodash'
import React from 'react';

import './App.css'
import Header from './Header.js'
import Content from './Content.js'
import Footer  from './Footer.js'

import image1 from '../images/bild1.jpg'
import image2 from '../images/bild2.jpg'

const App = React.createClass({
  displayName: 'App',

  getInitialState() {
    return {
      numberOfCards: 0,
      cards: {},
      images: [],
      flipped: [],
    }
  },

  handleStartNewGame(numberOfCards) {
    let images= [
      {
        id: 1,
        src: image1,
      },
      {
        id: 2,
        src: image2,
      },
    ]
    images= _.shuffle(_.concat([], images, images))
    let cards= {}
    for (let i = 0; i < numberOfCards; i++){
      cards[i]={
        id: i,
        image: images[i],
        isFlipped: false,
        }
    }
    this.setState({
      numberOfCards: numberOfCards,
      cards: cards,
      images: images,
    })
        /* Detta är en check som visar att jag får ut mina värden när jag klickar på knappen*/
        //console.log('Number of cards: ', numberOfCards)
        //console.log('Cards: ', cards)
        //console.log('Images: ', images)
  },

  flipCard(cardID) {
    //console.log('klickade på kort: ', cardID);
    let flippedCards= _.cloneDeep(this.state.cards)
    flippedCards[cardID].isFlipped=true

    let flipped=_.cloneDeep(this.state.flipped)

    if(!_.isEqual(flipped[0], flippedCards[cardID])) {
      flipped.push(flippedCards[cardID])
    }

    this.setState({
      cards: flippedCards,
      flipped: flipped,
    }, () => {
      if (flipped.length === 2) {
        _.delay(this.checkIfHit, 800, flipped, flippedCards)
      }
    })
  },

  checkIfHit(flipped, cards) {
    const cardOne = flipped[0]
    const cardTwo = flipped[1]
    if (cardOne.image.id===cardTwo.image.id) {
      delete cards[cardOne.id]
      delete cards[cardTwo.id]
    } else {
      cards[cardOne.id].isFlipped = false
      cards[cardTwo.id].isFlipped = false
    }
    this.setState({
      cards: cards,
      flipped: [],
    })
  },

  render() {
    return (
      <div className="App">
        <Header />
        <Content
          cards={this.state.cards}
          numberOfCards={this.state.numberOfCards}
          flipCard={this.flipCard}
        />
        <Footer
          handleStartNewGame={this.handleStartNewGame}
        />
      </div>
    );
  }
})

export default App;
