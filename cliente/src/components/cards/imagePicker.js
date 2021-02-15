import React, { Component } from 'react';
import * as Style from '../../style/myStyle'

class imagePicker extends Component {

    render() {

        return (
            <div style={{background:this.props.background.name}}>
                <img
                    style={Style.createDeckBanner}
                    src={this.props.banner.route}
                />
            </div>
        );
    }
}

export default imagePicker

