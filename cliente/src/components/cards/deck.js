import React, { Component } from 'react';
import { Col, Card } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
import * as Style from '../../style/myStyle'

const { Meta } = Card;

class deck extends Component {

  render() {
    
    return (
      <Col xs={24} sm={12} md={6} lg={6} xl={6}>
        <Card
          onClick={this.props.onClick}
          style={Style.cardStyle}
          hoverable
          cover={
            <img
              style={{background: this.props.background}}
              alt={this.props.deckName}
              src={this.props.banner}
            />
          }
        >
          <Meta
            title={this.props.deckName}/>
        </Card>
      </Col>
    );
  }
}

export default deck