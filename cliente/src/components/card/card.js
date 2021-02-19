import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Col, Card, Popconfirm } from 'antd';
import { EditOutlined, DeleteOutlined, PlusCircleOutlined, EyeOutlined   } from '@ant-design/icons';
import * as CLIENT_ROUTES from '../../assets/clientRoutes'

const { Meta } = Card;

class deck extends Component {

  render() {

    let actions = this.props.createMode? [
      <PlusCircleOutlined  onClick={this.props.onOpen} key="create" />] :
      [
        <Popconfirm title="¿Está seguro que desea borrar este mazo?" placement="top" onConfirm={this.props.onDelete} okText="Sí" cancelText="No"> <a href="#"><DeleteOutlined key="delete" /></a></Popconfirm>,
        <EditOutlined onClick={this.props.onOpen} key="edit" />,
        <Link to={CLIENT_ROUTES.cardsRouteCreator+this.props.deckId} ><EyeOutlined key="see" /></Link>
      ]

    return (
      <Col xs={24} sm={12} md={8} lg={6} xl={6}>
        <Card
          title={this.props.cardName}
          size="small"
          bodyStyle={{minHeight: "1rem"}}
          headStyle={{background:"#8ee000", "text-align": "center", color:"black", "font-size": "1.2em", "text-shadow": "1px 0 0 #fff, 0 -1px 0 #fff, 0 1px 0 #fff, -1px 0 0 #fff"}}
          onClick={this.props.onClick}
          actions={actions}
        >
        <p>Irrigación: ifgoidfgoisdgfioghdsig</p>
        <p>Inervación: ifgoidfgoisdgfioghdsig</p>
        <p>Función: ifgoidfgoisdgfioghdsig</p>
        <p>Irrigación: ifgoidfgoisdgfioghdsig</p>
        </Card>
      </Col>
    );
  }
}

export default deck