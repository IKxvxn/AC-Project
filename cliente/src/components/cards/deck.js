import React, { Component } from 'react';
import { Col, Card, Popconfirm } from 'antd';
import { EditOutlined, DeleteOutlined, PlusCircleOutlined  } from '@ant-design/icons';

const { Meta } = Card;

class deck extends Component {

  render() {

    let actions = this.props.createMode? [
      <PlusCircleOutlined  onClick={this.props.onOpen} key="create" />] :
      [
        <Popconfirm title="¿Está seguro que desea borrar este mazo?" placement="top" onConfirm={this.props.onDelete} okText="Sí" cancelText="No"> <a href="#"><DeleteOutlined key="delete" /></a></Popconfirm>,
        <EditOutlined onClick={this.props.onOpen} key="edit" />
      ]

    return (
      <Col xs={24} sm={12} md={8} lg={6} xl={6}>
        <Card
          size="small"
          onClick={this.props.onClick}
          cover={
              <img
                style={{ background: this.props.background }}
                alt={this.props.deckName}
                src={this.props.banner}
              />
          }
          actions={actions}
        >
          <Meta title={this.props.deckName} />
        </Card>
      </Col>
    );
  }
}

export default deck