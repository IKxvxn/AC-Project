import React, { Component } from 'react';
import { Form, Input, Button, Divider } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import LoginLogo from './loginLogo'
import * as Rules from './loginFormRules'
import * as Style from '../../style/myStyle'

class createAccountForm extends Component {

  onFinish = (datos) => {
    console.log('Received values of form: ', datos);
    this.props.crearCuenta(datos);
  };

  render() {
    return (
      <Form onFinish={this.onFinish}>

        <Form.Item className="logo" style={Style.loginLogoContainer}>
          <LoginLogo />
        </Form.Item>

        <Form.Item name="username" rules={Rules.newUsername}>
          <Input prefix={<UserOutlined />} placeholder="Elija un usuario" />
        </Form.Item>

        <Form.Item name="password" rules={Rules.newPassword}>
          <Input.Password prefix={<LockOutlined />} placeholder="Elija una contraseña" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" loading={this.props.isLoading} block>Crear cuenta</Button>
          <Divider plain style={Style.loginDivider}>O</Divider>
          <Button type="text" onClick={this.props.changeMode} block style={Style.buttonWraper}>
            🔥 Ingresa a tu cuenta 🔥
          </Button>
        </Form.Item>

      </Form>
    )
  }
}

export default createAccountForm