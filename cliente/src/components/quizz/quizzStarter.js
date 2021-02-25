import React, { Component, Fragment } from 'react';
import { Row, Button } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import background from '../../images/loginBackgroundPattern.png'


const antIcon = <LoadingOutlined style={{ fontSize: "5rem" }} spin />;

class colorPicker extends Component {

    render() {
        return (
            <Row justify="space-around" align="middle" style={{backgroundImage:`url(${background})`, minHeight:"50vh", backgroundSize:"contain"}}>
                <Button>Empezar</Button>
            </Row>
        );
    }
}

export default colorPicker

