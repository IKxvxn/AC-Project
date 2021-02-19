import React, { Component } from 'react';
import { Carousel } from 'antd';
import ImagePickerElement from './imagePickerElement'
import * as ClientPets from '../../assets/clientPets'

class imagePicker extends Component {

    constructor(props) {
        super(props)

        this.carouselRef = React.createRef();
    }

    render() {
        return (
            <Carousel effect="fade" dotPosition="top" afterChange={this.props.onBannerChange} ref={this.carouselRef}>
                {ClientPets.pets.map((banner) => (<ImagePickerElement banner={banner} background={this.props.background} />))}
            </ Carousel>
        );
    }

    componentDidMount(){
        this.carouselRef.current.goTo(this.props.selectedBanner, true)
    }
}

export default imagePicker

