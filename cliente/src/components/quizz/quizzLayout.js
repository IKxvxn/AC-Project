import React, { Component, Fragment } from 'react';
import { Steps, Button, message, Divider } from 'antd';
import QuizzConfigurations from './quizzConfigurations'
import LoadingScreen from '../otherComponents/loadingScreen'
import QuizzDisplayer from "./quizzDisplayer"
import * as Style from '../../style/myStyle'

const { Step } = Steps;


class quizzLayout extends Component {

  constructor(props) {
    super(props)

    this.state = {
      current: 0,
      switchState: false,
      decks: [],
      selectedDecks: [],
      numPreguntas: 1,
      numSegundos: 15
    }
  }

  next = () => {
    this.setState({ current: this.state.current + 1 })
    console.log(this.state.current)
  };

  prev = () => {
    this.setState({ current: this.state.current - 1 })
  };

  onSelectedDecksChange = (selectedDecks) => { this.setState({ selectedDecks: selectedDecks }) }
  onSwitchTimerChange = (switchState) => { this.setState({ switchState: switchState }) }
  onNumPreguntasChange = (numPreguntas) => { this.setState({ numPreguntas: numPreguntas }) }
  onNumSegundosChange = (numSegundos) => { this.setState({ numSegundos: numSegundos }) }

  onCreateQuizz = () => {
    this.next()
    this.props.createQuizz(
      this.state.selectedDecks, 
      this.state.numPreguntas,
      this.next,
      this.prev,
    )
  }

  render() {

    this.steps = [
      {
        key: 0,
        content: <QuizzConfigurations
          selectedDecksState={this.state.selectedDecks}
          numPreguntasState={this.state.numPreguntas}
          switchState={this.state.switchState}
          numSegundosState={this.state.numSegundos}
          decks={this.props.decks}
          onSelectedDecksChange={this.onSelectedDecksChange}
          onNumPreguntasChange={this.onNumPreguntasChange}
          onSwitchTimerChange={this.onSwitchTimerChange}
          onNumSegundosChange={this.onNumSegundosChange}
        />
      },
      {
        key: 1,
        content: <LoadingScreen marginTop="20vh" />,
      },
      {
        key: 2,
        content: <QuizzDisplayer quiz={this.props.quiz} numSegundos={this.state.numSegundos}/>,
      },
    ];

    console.log(this.props.quiz)

    return (
      <Fragment>
        <Divider style={Style.overFlowHidden}>Generador Rápido de Quiz</Divider>

        <Steps current={this.state.current}>
          {this.steps.map(item => (
            <Step key={item.key} />
          ))}
        </Steps>

        <div style={{ "min-height": "45vh", "margin-top": "2rem" }}>{this.steps[this.state.current].content}</div>

        <div style={{ "margin-top": "24px" }}>
          {this.state.current === 0 && (
            <Button type="primary" disabled={this.props.isCreatingQuizz} onClick={this.onCreateQuizz}>
              Crear
            </Button>
          )}
          {this.state.current === this.steps.length - 1 && (
            <Button type="primary" onClick={() => message.success('Processing complete!')}>
              Done
            </Button>
          )}
        </div>
      </Fragment>
    );
  }
}

export default quizzLayout