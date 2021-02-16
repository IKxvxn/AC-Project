import React, { Component } from 'react';
import { Row, Skeleton } from 'antd';
import DeckContainer from './deckContainer'
import * as ClientColors from '../../assets/clientColors'
import * as ClientPets from '../../assets/clientPets'

class cardsLayout extends Component {

  render() {
    return (
      <Row gutter={[8, 8]}>
        <Skeleton active loading={this.props.isLoading}>
          <DeckContainer 
            createMode={true} 
            selectedBanner={ClientPets.pets[0].key} 
            selectedColor={ClientColors.colors[5]} 
            onFinish={this.props.createDeck} 
            isCreating={this.props.isCreating} 
            deckName="Crear Mazo"
          />

          {this.props.decks.map((deck) => (
            <DeckContainer 
              selectedBanner={deck.bannerKey} 
              selectedColor={ClientColors.getColorByKey(deck.colorKey)} 
              onFinish={this.props.updateDeck}
              onDelete={this.props.deleteDeck} 
              isCreating={this.props.isCreating} 
              deckName={deck.name} 
              _id={deck._id}
            />
          ))}
        </Skeleton>
      </Row>

    );
  }
}

export default cardsLayout

