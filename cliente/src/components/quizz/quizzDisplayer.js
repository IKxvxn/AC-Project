import React, { Component, Fragment } from 'react';
import { Typography, Row, Col } from 'antd';
import Timer from 'react-compound-timer'
import Question from './quizzQuestion'
import QuizzStarter from './quizzStarter'

class quizzDisplayer extends Component {

    constructor(props) {
        super(props)

        this.state = {
            numPregunta: 0,
            numPreguntasOk: 0,
            hasStarted: false,
            timerState: null
        }

        this.timerRef = React.createRef();
    }

    onSelectQuestionOption = (isCorrect) => {
        if (isCorrect) {
            this.setState({ numPreguntasOk: this.state.numPreguntasOk + 1 })
        }
        
        this.setState({ numPregunta: this.state.numPregunta + 1, timerState: null})
        this.timerRef.current.reset()
        this.timerRef.current.start()
    }

    onStart = () => {
        this.setState({hasStarted:true})
        this.timerRef.current.start()
    }

    render() {
        return (
            <Fragment>
                <Timer
                    ref={this.timerRef}
                    initialTime={this.props.numSegundos * 1000}
                    direction="backward"
                    lastUnit="s"
                    startImmediately={false}
                    checkpoints={[
                        {
                            time: 1 * 1000,
                            callback: () => (this.onSelectQuestionOption(false)),
                        },
                        {
                            time: 11 * 1000,
                            callback: () => (this.setState({timerState:"warning"})),
                        },
                        {
                            time: 6 * 1000,
                            callback: () => (this.setState({timerState:"danger"})),
                        }
                    ]}
                >
                    {({ start, resume, pause, stop, reset, timerState }) => (
                        <Fragment>
                            <Row gutter={[8, 8]} justify="space-between">
                                <Col>
                                    <Typography.Text type={this.state.timerState} style={{ fontSize: "1rem" }}>{"Tiempo: "}<Timer.Seconds />{"s"}</Typography.Text>
                                </Col>
                                <Col>
                                    <Typography style={{ fontSize: "1rem" }}>{"Puntuación: " + (this.state.numPreguntasOk) + "/" + this.props.quiz.length}</Typography>
                                </Col>
                                <Col>
                                    <Typography style={{ fontSize: "1rem" }}>{"Pregunta: " + (this.state.numPregunta + 1) + "/" + this.props.quiz.length}</Typography>
                                </Col>
                            </Row>
                        </Fragment>
                    )}
                </Timer>
                    {this.props.quiz.length> this.state.numPregunta?
                            <Question onStart={this.onStart} hasStarted={this.state.hasStarted} question={this.props.quiz[this.state.numPregunta]} onSelectQuestionOption={this.onSelectQuestionOption} />
                        :
                            null
                    }
                     
            </Fragment>
        );
    }
}

export default quizzDisplayer

