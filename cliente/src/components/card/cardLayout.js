import React, { Component, Fragment } from 'react';
import { Row, Divider } from 'antd';
import { withRouter } from 'react-router-dom'
import CardContainer from './cardContainer'
import LoadingScreen from '../otherComponents/loadingScreen'
import * as ClientColors from '../../assets/clientColors'
import * as ClientBanners from '../../assets/clientBanners'
import * as Style from '../../style/myStyle'

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
      return { name: "Cargando...", _id: 0, colorKey: 0, bannerkey: 0, cards: [] }
    }
    return deck
  }

  render() {
    return (
      <Fragment>
        <Divider style={Style.overFlowHidden}>{"Cartas del Mazo: " + this.state.deck.name}</Divider>
        <Row gutter={[8, 8]}>

          {!this.props.isLoading
            
          ?
            <Fragment>
              <CardContainer
                createMode={true}
                selectedBanner={this.state.deck? ClientBanners.getBannerByKey(this.state.deck.bannerKey).banner.large:null}
                selectedColor={this.state.deck? ClientColors.getColorByKey(this.state.deck.colorKey).name:null}
                onFinish={this.props.createCard}
                isCreating={this.props.isCreating}
                deckId={this.state.deck._id}
                cardName="Añadir Carta"
              />

              {this.state.deck.cards.map((card) => (
                <CardContainer
                  createMode={false}
                  selectedBanner={this.state.deck? ClientBanners.getBannerByKey(this.state.deck.bannerKey).banner.large:null}
                  selectedColor={this.state.deck? ClientColors.getColorByKey(this.state.deck.colorKey).name:null}
                  onFinish={this.props.createCard}
                  isCreating={this.props.isCreating}
                  deckId={this.state.deck._id}
                  cardName={card.name}
                  cardData={card.details}
                />
              ))}
            </Fragment>
          :
            <LoadingScreen />
          }

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