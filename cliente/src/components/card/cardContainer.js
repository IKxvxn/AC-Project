import React, { Component, Fragment } from 'react';
import { Modal, Button, Form, Input, Divider, Row, Col } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import Card from './card'
import * as Rules from '../../assets/formsRules'
import * as Style from '../../style/myStyle'
import * as ClientColors from '../../assets/clientColors'
import * as ClientBanners from '../../assets/clientBanners'


class cardContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isModalVisible: false,
        };
    }

    toggleHandler(isModalVisible) {
        this.setState({ isModalVisible });
        this.setState({ selectedColor: this.props.selectedColor, selectedBanner: this.props.selectedBanner })
    }

    onFinish = (datos) => {
        this.props.onFinish(
            { ...datos, colorKey: this.state.selectedColor.key, bannerKey: ClientBanners.banners[this.state.selectedBanner].key, _id: this.props._id },
            () => { this.toggleHandler(false) }
        )
    };

    render() {
        return (
            <Fragment>
                <Card
                    deckId={this.props._id}
                    cardName={this.props.cardName}
                    banner={this.props.selectedBanner}
                    onOpen={() => this.toggleHandler(true)}
                    onDelete={() => { this.props.onDelete(this.props._id) }}
                    background={this.props.selectedColor}
                    createMode={this.props.createMode}
                />
                <Modal
                    title={this.props.cardName}
                    centered
                    destroyOnClose={true}
                    visible={this.state.isModalVisible}
                    onCancel={() => this.toggleHandler(false)}
                    footer={null}
                >
                    <Form onFinish={this.onFinish} preserve={false}>

                        <Form.Item {...Style.createDeckForm} name="name" label="Nombre" rules={Rules.newCardName} initialValue={this.props.createMode?null:this.props.deckName}>
                            <Input />
                        </Form.Item>

                        <Form.List name="detalles">
                            {(fields, { add, remove }) => (
                                <Fragment>
                                    {fields.map(field => (
                                        <Fragment key={field.key} >
                                            <Divider />
                                            <Row justify="start" gutter={[8, 8]}>
                                                <Col xs={20} sm={22} md={22} lg={22} xl={22}>
                                                    <Form.Item {...field} name={[field.name, 'dato']} fieldKey={[field.fieldKey, 'dato']} rules={Rules.newDatoName}>
                                                        <Input placeholder="Dato" />
                                                    </Form.Item>
                                                </Col>

                                                <Col xs={4} sm={2} md={2} lg={2} xl={2}>
                                                    <Button type="primary" block onClick={() => remove(field.name)} icon={<MinusCircleOutlined />} />
                                                </Col>

                                                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                                    <Form.Item {...field} name={[field.name, 'descripcion']} fieldKey={[field.fieldKey, 'descripcion']} rules={Rules.newDescripcion}>
                                                        <Input.TextArea rows={2}  placeholder="Descripción" />
                                                    </Form.Item>
                                                </Col>
                                            </Row>
                                        </Fragment>
                                    ))}

                                    <Form.Item>
                                        <Button type="dashed" block onClick={() => add()} block icon={<PlusOutlined />}> Añadir Dato </Button>
                                    </Form.Item>

                                </Fragment>
                            )}
                        </Form.List>

                        <Form.Item >
                            <Row justify="end" gutter={[8, 8]}>
                                <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                                    <Button block onClick={() => this.toggleHandler(false)}>Cancelar</Button>
                                </Col>
                                <Col xs={24} sm={12} md={12} lg={12} xl={12}>
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

export default cardContainer