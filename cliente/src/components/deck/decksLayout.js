import React, { Component, Fragment } from 'react';
import { Row, Skeleton, Input, Divider } from 'antd';
import DeckContainer from './deckContainer'
import * as ClientColors from '../../assets/clientColors'
import * as ClientPets from '../../assets/clientPets'

class deckLayout extends Component {

  constructor(props) {
    super(props)

    this.state = {
      filteredData: this.props.decks,
      filter: "",
      didUpdate: false
    }
  }

  onSearchAux = (filter) => {
    this.setState({filteredData: this.props.decks.filter(deck => deck.name.toLowerCase().includes(filter)), filter:filter})
  }

  onSearch = (event) => {
    this.onSearchAux( event.target.value.toLowerCase())
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
    this.setState({ filteredData: props.decks, didUpdate:false })
  }

  componentDidUpdate() {
    if(this.state.filter!==""&!this.state.didUpdate){
      this.onSearchAux(this.state.filter) 
      this.setState({didUpdate:true})
    }
  }
}

export default deckLayout

