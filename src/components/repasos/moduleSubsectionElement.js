import React, { Component } from 'react';
import { Col, Card } from 'antd';
import * as Style from '../../style/myStyle'

class moduleSubsectionElement extends Component {

  render() {
    const { Meta } = Card;
    return (

      <Col xs={24} sm={12} md={6} lg={6} xl={6}>
        <Card
          style={Style.cardStyle}
          hoverable
          cover={
            <img
              alt="example"
              src="https://hipertextual.com/files/2019/05/hipertextual-celulas-placentarias-regenerar-corazon-danado-2019139892.jpg"
            />
          }
        >
          <Meta
            title={this.props.subsectionElementName}
          />
        </Card>
      </Col>
    );
  }
}

export default moduleSubsectionElement