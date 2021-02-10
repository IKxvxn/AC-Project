import React, { Component } from 'react';
import { Form, Input, Button, Divider, Row, Card, Col } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import logo from "../../images/book.png"
import * as Rules from './loginFormRules'
import * as Style from '../../style/myStyle'



class loginLayout extends Component {

  render() {

    const onFinish = (values) => {
      console.log('Received values of form: ', values);
    };


    return (
      <Row type="flex" justify="center" align="middle" style={Style.loginMainRow}>
        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
          <Card>
            <Form onFinish={onFinish}>

              <Form.Item className="logo" style={Style.loginLogoContainer}>
                <img style={Style.loginLogo} alt="logo" src={logo} />
              </Form.Item>

              <Form.Item name="username" rules={Rules.username}>
                <Input prefix={<UserOutlined />} placeholder="Usuario" />
              </Form.Item>

              <Form.Item name="password" rules={Rules.password}>
                <Input prefix={<LockOutlined />} type="password" placeholder="Contraseña" />
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit" style={Style.loginButton}>Ingresar</Button>
                <Divider plain style={Style.loginDivider}>O</Divider>
                <Button type="secondary" htmlType="submit" style={Style.loginButton}>Crear cuenta</Button>
              </Form.Item>

            </Form>
          </Card>
        </Col>
      </Row>
    );

  }
};


export default loginLayout

