import React, { Component } from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';


const antIcon = <LoadingOutlined style={{ fontSize: "5rem" }} spin />;

class colorPicker extends Component {

    render() {
        return (
            <Spin style={{width:"100%", marginTop:"25vh"}} indicator={antIcon} />
        );
    }
}

export default colorPicker

