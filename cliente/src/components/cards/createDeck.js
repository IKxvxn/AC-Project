import React, { Component, Fragment } from 'react';
import { Modal, Button, Carousel, Form, Input, Row, Col } from 'antd';
import Deck from './deck'
import ColorPicker from './colorPicker'
import ImagePicker from './imagePicker'
import * as Rules from '../../assets/formsRules'
import * as Style from '../../style/myStyle'
import * as ClientColors from '../../assets/clientColors'
import * as ClientPets from '../../assets/clientPets'


class createDeck extends Component {

    state = {
        isModalVisible: false,
        selectedColor: ClientColors.colors[0],
        selectedBanner: 0
    };

    toggleHandler(isModalVisible) {
        this.setState({ isModalVisible });
    }

    onColorChange = (selectedColor) => {
        this.setState({ selectedColor });
    }

    onBannerChange = (selectedBanner) => {
        this.setState({ selectedBanner });
    }

    onFinish = (datos) => {
        this.props.createDeck(
            {...datos, colorKey: this.state.selectedColor.key, bannerKey: this.state.selectedBanner},
            () => {this.toggleHandler(false)}
        )
    };

    render() {

        return (
            <Fragment>
                <Deck
                    deckName="➕ Crear Mazo"
                    banner={ClientPets.pets[0].route}
                    create={true} onClick={() => this.toggleHandler(true)}
                    background={ClientColors.colors[5].name}
                />
                <Modal
                    title="Crear Mazo"
                    centered
                    destroyOnClose={true}
                    visible={this.state.isModalVisible}
                    onCancel={() => this.toggleHandler(false)}
                    footer={null}
                >
                    <Form onFinish={this.onFinish} preserve={false}>

                        <Form.Item>
                            <Carousel effect="fade" dotPosition="top" afterChange={this.onBannerChange}>
                                {ClientPets.pets.map((banner) => (<ImagePicker banner={banner} background={this.state.selectedColor} />))}
                            </ Carousel>
                        </Form.Item>

                        <Form.Item {...Style.createDeckForm} label="Fondo">
                            {ClientColors.colors.map((color) => (<ColorPicker background={color} onColorChange={this.onColorChange} />))}
                        </Form.Item>

                        <Form.Item {...Style.createDeckForm} name="name" label="Nombre" rules={Rules.newDeckname}>
                            <Input />
                        </Form.Item>

                        <Form.Item>
                            <Row justify="end" gutter={[8, 8]}>
                                <Col xs={24} sm={12} md={6} lg={6} xl={6}>
                                    <Button block onClick={() => this.toggleHandler(false)}>Cancelar</Button>
                                </Col>
                                <Col xs={24} sm={12} md={6} lg={6} xl={6}>
                                    <Button type="primary" block htmlType="submit" >Crear</Button>
                                </Col>
                            </Row>
                        </Form.Item>

                    </Form>
                </Modal>
            </Fragment >
        );
    }
}

export default createDeck

