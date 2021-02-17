import React, { Component, Fragment } from 'react';
import { Modal, Button, Form, Input, Row, Col } from 'antd';
import Deck from './deck'
import ColorPicker from './colorPicker'
import ImagePicker from './imagePicker'
import * as Rules from '../../assets/formsRules'
import * as Style from '../../style/myStyle'
import * as ClientColors from '../../assets/clientColors'
import * as ClientPets from '../../assets/clientPets'


class deckContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isModalVisible: false,
            selectedColor: this.props.selectedColor,
            selectedBanner: this.props.selectedBanner
        };
    }

    toggleHandler(isModalVisible) {
        this.setState({ isModalVisible });
        this.setState({selectedColor:this.props.selectedColor, selectedBanner:this.props.selectedBanner})
    }

    onColorChange = (selectedColor) => {
        this.setState({ selectedColor });
    }

    onBannerChange = (selectedBanner) => {
        this.setState({ selectedBanner });
    }

    onFinish = (datos) => {
        this.props.onFinish(
            {...datos, colorKey: this.state.selectedColor.key, bannerKey: ClientPets.pets[this.state.selectedBanner].key, _id:this.props._id},
            () => {this.toggleHandler(false)}
        )
    };

    render() {
        return (
            <Fragment>
                <Deck
                    deckName={this.props.deckName}
                    banner={ClientPets.getPetByKey(this.props.selectedBanner).route}
                    onOpen={() => this.toggleHandler(true)}
                    onDelete={() => {this.props.onDelete(this.props._id)}}
                    background={this.props.selectedColor.name}
                    createMode={this.props.createMode}
                />
                <Modal
                    title={this.props.deckName}
                    centered
                    destroyOnClose={true}
                    visible={this.state.isModalVisible}
                    onCancel={() => this.toggleHandler(false)}
                    footer={null}
                >
                    <Form onFinish={this.onFinish} preserve={false}>

                        <Form.Item>
                            <ImagePicker onBannerChange={this.onBannerChange} background={this.state.selectedColor} selectedBanner={this.state.selectedBanner} />
                        </Form.Item>

                        <Form.Item {...Style.createDeckForm} label="Fondo">
                            {ClientColors.colors.map((color) => (<ColorPicker background={color} onColorChange={this.onColorChange} />))}
                        </Form.Item>

                        <Form.Item {...Style.createDeckForm} name="name" label="Nombre" rules={Rules.newDeckname} initialValue={this.props.createMode?null:this.props.deckName}>
                            <Input />
                        </Form.Item>

                        <Form.Item>
                            <Row justify="end" gutter={[8, 8]}>
                                <Col xs={24} sm={12} md={6} lg={6} xl={6}>
                                    <Button block onClick={() => this.toggleHandler(false)}>Cancelar</Button>
                                </Col>
                                <Col xs={24} sm={12} md={6} lg={6} xl={6}>
                                    <Button type="primary" block htmlType="submit" loading={this.props.isCreating} >{this.props.createMode?"Crear":"Actualizar"}</Button>
                                </Col>
                            </Row>
                        </Form.Item>

                    </Form>
                </Modal>
            </Fragment >
        );
    }
}

export default deckContainer