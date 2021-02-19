import React, { Component, Fragment } from 'react';
import { Row, Divider } from 'antd';
import { withRouter } from 'react-router-dom'
import CardContainer from './cardContainer'
import * as ClientColors from '../../assets/clientColors'
import * as ClientPets from '../../assets/clientPets'


class cardLayout extends Component {
  constructor(props) {
    super(props)

    this.state = {
      deck: this.getDeck()
    }
  }

  getDeck = () => {
    let deck = this.props.decks.find(deck => deck._id === this.props.match.params.mazoId)
    if (deck === undefined) {
      return { name: "Cargando...", _id: 0, colorKey: 0, bannerkey: 0 }
    }
    return deck
  }

  render() {
    return (
      <Fragment>
        <Divider style={{ "overflow": "hidden" }}>{"Cartas del Mazo: " + this.state.deck.name}</Divider>
        <Row gutter={[8, 8]}>
          <CardContainer
            createMode={true}
            selectedBanner={ClientPets.pets[0].key}
            selectedColor={ClientColors.colors[5]}
            onFinish={this.props.createDeck}
            isCreating={this.props.isCreating}
            cardName="Añadir Carta"
          />
        </ Row>
      </Fragment>
    );
  }
  componentDidUpdate(oldProps) {
    if (this.props.decks.length !== oldProps.decks.length) {
      this.setState({ deck: this.getDeck() })
    }
  }
}

export default withRouter(cardLayout)