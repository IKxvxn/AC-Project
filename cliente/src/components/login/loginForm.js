import React, { Component } from 'react';
import { Form, Input, Button, Divider, Typography } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import LoginLogo from './loginLogo'
import * as Rules from './loginFormRules'
import * as Style from '../../style/myStyle'

class loginForm extends Component {

    onFinish = (values) => {
        console.log('Received values of form: ', values);
        this.props.login(this.props.history);
    };

    render() {
        return (
            <Form onFinish={this.onFinish}>

                <Form.Item className="logo" style={Style.loginLogoContainer}>
                    <LoginLogo />
                </Form.Item>

                <Form.Item name="username" rules={Rules.username}>
                    <Input prefix={<UserOutlined />} placeholder="Usuario" />
                </Form.Item>

                <Form.Item name="password" rules={Rules.password}>
                    <Input.Password prefix={<LockOutlined />} type="password" placeholder="Contraseña" />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" block loading={this.props.isLoading}>Ingresar</Button>
                    <Divider plain style={Style.loginDivider}>O</Divider>
                    <Button type="text" onClick={this.props.changeMode} block style={Style.buttonWraper}>
                        ✨ Crea una cuenta ✨
                    </Button>
                </Form.Item>

            </Form>
        )
    }
}

export default loginForm