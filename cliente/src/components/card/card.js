import React, { Component, Fragment } from 'react';
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
    console.log(this.props.banner)
    return (
      <Col xs={24} sm={12} md={8} lg={6} xl={6}>
        <Card
          title={
            <Fragment>
              <div style={{backgroundImage:`url(${this.props.banner})`, height:"3.5rem" , marginBottom:"-0.5rem", marginRight:"-4rem" ,marginTop:"-0.5rem", backgroundSize:"13rem auto", backgroundRepeat:"no-repeat" , backgroundPosition:"right"}}>
                <div style={{paddingTop:"1rem", paddingLeft:"1rem", height:"3.5rem", background: "rgba(0, 0, 0, 0.1)"}}>{this.props.cardName}</div>
              </div>
            </Fragment>
          }
          size="small"
          bodyStyle={{minHeight: "1rem"}}
          headStyle={{background:this.props.background, "text-align": "left", color:"white", textShadow: "black 0px 0px 3px", fontWeight:"bold", overflow:"hidden", padding:"0"}}
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