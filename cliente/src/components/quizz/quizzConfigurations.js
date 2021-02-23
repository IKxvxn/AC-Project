import React, { Component } from 'react';
import { Form, Button, Radio, Select, Cascader, DatePicker, InputNumber, TreeSelect, Switch } from 'antd';
import Tooltip from '../otherComponents/tooltip'
import * as Rules from '../../assets/formsRules'
const { SHOW_PARENT } = TreeSelect;

class quizzConfigurations extends Component {

    onFinish = (datos) => {
        console.log(datos)
    };

    render() {
        console.log(this.props.selectedDecksState)
        return (
            <Form labelCol={{ span: 4 }} layout="horizontal" onFinish={this.onFinish}>
                <Form.Item name="decks" label="Mazos a utilizar" rules={Rules.pickDecks}>
                    <TreeSelect treeCheckable showCheckedStrategy={SHOW_PARENT} onChange={this.props.onSelectedDecksChange} defaultValue={this.props.selectedDecksState}
                        treeData={this.props.decks.map(deck => ({ title: deck.name, value: deck._id, children: deck.cards.map((card) => ({ title: card.name, value: deck._id + "!!" + card._id })) }))}
                    />
                </Form.Item>

                <Form.Item label="Número de preguntas">
                    <InputNumber min={1} max={30} onChange={this.props.onNumPreguntasChange} defaultValue={this.props.numPreguntasState} /> <Tooltip title="Entre 1 y 30 preguntas" />
                </Form.Item>

                <Form.Item  label="Timer">
                    <Switch defaultChecked={this.props.switchState} onChange={this.props.onSwitchTimerChange} checkedChildren="Sí" unCheckedChildren="No" />
                </Form.Item>

                <Form.Item  label="Segundos por pregunta">
                    <InputNumber disabled={!this.props.switchState} onChange={this.props.onNumSegundosChange} min={15} max={180} defaultValue={this.props.numSegundosState} /> <Tooltip title="Entre 15 y 180 segundos" />
                </Form.Item>

            </Form>
        );
    }

}

export default quizzConfigurations

