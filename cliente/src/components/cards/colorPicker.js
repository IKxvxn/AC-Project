import React, { Component } from 'react';
import { Col, Button } from 'antd';

class colorPicker extends Component {

    render() {
        return (
            <Button onClick={() => this.props.onColorChange(this.props.background)} style={{ background: this.props.background.name}} shape="circle" >    ‎</Button>
        );
    }
}

export default colorPicker

