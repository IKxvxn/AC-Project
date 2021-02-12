import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Form, Input, Button, Divider, Row, Card, Col } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import * as LoginActions from './loginActions'
import logo from "../../images/book.png"
import * as Rules from './loginFormRules'
import * as Style from '../../style/myStyle'


class loginLayout extends Component {

  onFinish = (values) => {
    console.log('Received values of form: ', values);
    this.props.login(this.props.history);
  };

  render() {

    return (
      <Row type="flex" justify="center" align="middle" style={Style.loginMainRow}>

        <Col xs={24} sm={24} md={8} lg={6} xl={4}>
          <Card>
            <Form onFinish={this.onFinish}>

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
                <Button type="primary" htmlType="submit" block loading={this.props.isLoading}>Ingresar</Button>
                <Divider plain style={Style.loginDivider}>O</Divider>
                <Button htmlType="submit" block>Crear cuenta</Button>
              </Form.Item>

            </Form>
          </Card>
        </Col>
      </Row>
    );

  }
};

function mapStateToProps(state) {
  return {
    isLoading: state.loginReducer.isLoading
  }
}

function mapDispatchToProps(dispatch) {
  return {
    login: (history) => dispatch(LoginActions.login(history))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(loginLayout))

