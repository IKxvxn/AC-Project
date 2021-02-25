import React, { Component, Fragment } from 'react';
import { Spin, Typography } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';


const antIcon = <LoadingOutlined style={{ fontSize: "5rem" }} spin />;

class colorPicker extends Component {

    render() {
        return (
            <Fragment>
                <Spin style={{width:"100%", marginTop:this.props.marginTop}} indicator={antIcon} />
                <Typography.Text type="success" style={{fontSize:"1.2rem", textAlign:"center",paddingTop:"1rem",display:"block", width:"100%"}}>Cargando...</Typography.Text>
            </Fragment>
        );
    }
}

export default colorPicker

