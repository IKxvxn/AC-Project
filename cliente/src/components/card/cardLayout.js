import React, { Component, Fragment } from 'react';
import { Row, Divider, Input } from 'antd';
import { withRouter } from 'react-router-dom'
import CardContainer from './cardContainer'
import LoadingScreen from '../otherComponents/loadingScreen'
import * as ClientColors from '../../assets/clientColors'
import * as ClientBanners from '../../assets/clientBanners'
import * as Style from '../../style/myStyle'

class cardLayout extends Component {
  constructor(props) {
    super(props)

    let deck = this.getDeck()

    this.state = {
      deck: deck,
      filteredData: deck.cards,
      filter: ""
    }
  }

  cardPlaceholderText = [{fact: "Hint 1", description: "Cuando el texto supere el tamaño de la carta se desplegará un barra lateral visible al colocar el ratón sobre la carta"},
                         {fact: "Hint 2", description: "Al realizar quizzes las cartas con los mismos atributos serán utilizadas para generar las opciones de respuesta."},
                         {fact: "Hint 3", description: "Si no se encuentran otras opciones para generar las respuestas la pregunta pasará a ser de complete."}]

  getDeck = () => {
    let deck = this.props.decks.find(deck => deck._id === this.props.match.params.mazoId)
    if (deck === undefined) {
      return { name: "Cargando...", _id: 0, colorKey: 0, bannerkey: 0, cards: [] }
    }
    return deck
  }

  onSearchAux = (filter) => {
    if(filter!==""){
      this.setState({filteredData: this.state.deck.cards.filter(card => card.name.toLowerCase().includes(filter))})
    } 
    else{
      this.setState({filteredData: this.state.deck.cards})
    }
  }

  onSearch = (event) => {
    this.setState({filter:event.target.value.toLowerCase()})
    this.onSearchAux( event.target.value.toLowerCase())
  }

  render() {
    return (
      <Fragment>
        <Divider style={Style.overFlowHidden}>{"Cartas del Mazo: " + this.state.deck.name}</Divider>
        <Row gutter={[8, 8]}>
          <Input.Search placeholder="Buscar Carta" onChange={this.onSearch} allowClear size="large" />
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
                cardData={this.cardPlaceholderText}
              />

              {this.state.filteredData.map((card) => (
                <CardContainer
                  createMode={false}
                  selectedBanner={this.state.deck? ClientBanners.getBannerByKey(this.state.deck.bannerKey).banner.large:null}
                  selectedColor={this.state.deck? ClientColors.getColorByKey(this.state.deck.colorKey).name:null}
                  onFinish={this.props.updateCard}
                  onDelete={this.props.deleteCard}
                  isCreating={this.props.isCreating}
                  deckId={this.state.deck._id}
                  cardName={card.name}
                  cardData={card.details}
                  cardId={card._id}
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
    if (oldProps.isLoading===true && this.props.isLoading===false) {
      let deck = this.getDeck()
      this.setState({ deck: deck, filteredData:deck.cards })
    }
    if(oldProps.isCreating===true && this.props.isCreating===false){
      let deck = this.getDeck()
      this.setState({ deck: deck})
      this.onSearchAux(this.state.filter)
    }
  }
}

export default withRouter(cardLayout)