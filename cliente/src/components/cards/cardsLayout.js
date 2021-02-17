import React, { Component, Fragment } from 'react';
import { Row, Skeleton, Input, Divider } from 'antd';
import DeckContainer from './deckContainer'
import * as ClientColors from '../../assets/clientColors'
import * as ClientPets from '../../assets/clientPets'

class cardsLayout extends Component {

  constructor(props) {
    super(props)

    this.state = {
      filteredData: this.props.decks
    }
  }

  onSearch = (event) => {
    let filter = event.target.value.toLowerCase()
    this.setState({filteredData: this.props.decks.filter(deck => deck.name.toLowerCase().includes(filter))})
  }

  render() {
    return (
      <Fragment>
        <Divider>Mis Mazos</Divider>
        <Row gutter={[8, 8]}>
          <Input.Search placeholder="Buscar Mazo" onChange={this.onSearch} allowClear size="large" />

          <Skeleton title={false} paragraph={{ rows: 6 }} active loading={this.props.isLoading}>
            <DeckContainer
              createMode={true}
              selectedBanner={ClientPets.pets[0].key}
              selectedColor={ClientColors.colors[5]}
              onFinish={this.props.createDeck}
              isCreating={this.props.isCreating}
              deckName="Crear Mazo"
            />

            {this.state.filteredData.map((deck) => (
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
      </Fragment>
    );
  }
  componentWillReceiveProps(props) {
    this.setState({ filteredData: props.decks })
  }
}

export default cardsLayout

