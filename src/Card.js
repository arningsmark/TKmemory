import React from 'react';

import './Card.css';

const Card = React.createClass({
  displayName: 'Card',

  propTypes:{
    id: React.PropTypes.number,
    image: React.PropTypes.object,
    isFlipped: React.PropTypes.bool,
    flipCard: React.PropTypes.func,
  },

  render() {
    let image= null
    if (this.props.isFlipped){
      image=(
        <img src={this.props.image.src} />
      )
    }
    return (
      //bind gör att vi kan göra ngt med scope:a om. Skulle vi ite göra detta skulleden göra funktioen direkt utan att kunnaksicka med ngt. vilket vi bhöver.
      <div onClick={this.props.flipCard.bind(null, this.props.id)} className="Card">
        {image}
      </div>
    );
  }
})

export default Card;
