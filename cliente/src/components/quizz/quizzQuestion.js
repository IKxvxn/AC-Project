import React, { Component, Fragment, Skeleton } from 'react';
import { Row, Col, Card, Typography } from 'antd';
import * as Style from '../../style/myStyle'

const gridStyle = {
    width: '100%',
};

class question extends Component {

    render() {

        return (
            <Col span={24}>
                {this.props.hasStarted ?
                    <Fragment>
                        <Card
                            title={<span style={{ overflow: "auto" }}>
                                <Typography.Text>
                                    Con respecto al mazo: <Typography.Text style={{ fontWeight: "bold" }}>{this.props.question.deckName + " "}</Typography.Text>
                                    y a la carta: <Typography.Text style={{ fontWeight: "bold" }}>{this.props.question.cardName + " "}</Typography.Text>
                                    ¿Cuál de los siguientes enunciados es correcto con respecto al atributo: <Typography.Text style={{ fontWeight: "bold" }}>{this.props.question.options[0].fact}</Typography.Text>?
                        </Typography.Text>
                            </span>}
                            size="small"
                            bodyStyle={{ padding: "0" }}
                        >
                        </Card>
                        {this.props.question.options.map(option => <Card.Grid onClick={() => (this.props.onSelectQuestionOption(option.correct))} style={gridStyle}>{option.description}</Card.Grid>)}
                    </Fragment>
                    :
                    <Card
                        title="Haz clic en alguna de las opciones para comenzar el quiz"
                        bodyStyle={{ padding: "0" }}
                    >
                        <Card.Grid onClick={() => (this.props.onStart())} style={gridStyle}>🧠 Comenzar Quiz</Card.Grid>
                        <Card.Grid onClick={() => (this.props.onStart())} style={gridStyle}>🦴 Comenzar Quiz</Card.Grid>
                        <Card.Grid onClick={() => (this.props.onStart())} style={gridStyle}>👁️ Comenzar Quiz</Card.Grid>
                        <Card.Grid onClick={() => (this.props.onStart())} style={gridStyle}>👂 Comenzar Quiz</Card.Grid>
                    </Card>
                }

            </Col>
        );
    }
}

export default question