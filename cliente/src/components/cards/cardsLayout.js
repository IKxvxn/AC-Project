import React, { Component } from 'react';
import { Row } from 'antd';
import Deck from './deck'
import CreateDeck from './createDeck'

class cardsLayout extends Component {

  render() {
    return (
      <Row >
        <CreateDeck createDeck={this.props.createDeck} />
      </Row>

    );
  }
}

export default cardsLayout

