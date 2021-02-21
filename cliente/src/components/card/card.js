import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom'
import { Row, Col, Card, Popconfirm, Typography } from 'antd';
import { EditOutlined, DeleteOutlined, PlusCircleOutlined, EyeOutlined   } from '@ant-design/icons';
import { Scrollbars } from 'react-custom-scrollbars';
import * as Style from '../../style/myStyle'
import * as CLIENT_ROUTES from '../../assets/clientRoutes'

const { Meta } = Card;

class deck extends Component {

  constructor(props){
    super(props)
    this.state = {
      cardDataSubset: props.cardData === undefined? [] : props.cardData
    }
  }

  render() {

    let actions = this.props.createMode? [
      <PlusCircleOutlined  onClick={this.props.onOpen} key="create" />] :
      [
        <Popconfirm title="¿Está seguro que desea borrar este mazo?" placement="top" onConfirm={this.props.onDelete} okText="Sí" cancelText="No"> <a href="#"><DeleteOutlined key="delete" /></a></Popconfirm>,
        <EditOutlined onClick={this.props.onOpen} key="edit" />,
        <Link to={CLIENT_ROUTES.cardsRouteCreator+this.props.deckId} ><EyeOutlined key="see" /></Link>
      ]
    console.log(this.props.banner)
    return (
      <Col xs={24} sm={12} md={8} lg={6} xl={6}>
        <Card
          title={
              <div style={{backgroundImage:`url(${this.props.banner})`, ...Style.cardHeaderTextContainer}}>
                <div style={Style.cardHeaderText}>{this.props.cardName}</div>
              </div>
          }
          size="small"
          bodyStyle={{background:this.props.background+"33", height:"13rem"}}
          headStyle={{...Style.cardHeader, background:this.props.background}}
          onClick={this.props.onClick}
          actions={actions}
        >
          <Scrollbars autoHide style={{height:"12rem"}}>
            <Row align="top">
              {this.state.cardDataSubset.map(dato => 
                <Col span={24}>
                  <Typography.Text style={{fontSize:"1rem", marginLeft:"-0.2rem"}} strong keyboard>{dato.fact}</Typography.Text>
                  <Typography.Paragraph style={{textAlign:"justify", textJustify:"inter-word"}}>{dato.description}</Typography.Paragraph>
                </Col>
              )}
            </Row>
          </Scrollbars>
        </Card>
      </Col>
    );
  }
}

export default deck