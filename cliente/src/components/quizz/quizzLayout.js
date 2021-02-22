import React, { Component, Fragment } from 'react';
import { Steps, Button, message, Divider } from 'antd';
import * as Style from '../../style/myStyle'

const { Step } = Steps;


class quizzLayout extends Component {

  constructor(props){
    super(props)

    this.state = {current:0}
  }

  steps = [
    {
      key: 0,
      content: 'First-content',
    },
    {
      key: 1,
      content: 'Second-content',
    },
    {
      key: 2,
      content: 'Last-content',
    },
  ];

  next = () => {
    this.setState({ current: this.state.current + 1 })
  };

  prev = () => {
    this.setState({ current: this.state.current - 1 })
  };

  render() {
    return (
      <Fragment>
        <Divider style={Style.overFlowHidden}>Generador Rápido de Quizz</Divider>
       
        <Steps current={this.state.current}>
          {this.steps.map(item => (
            <Step key={item.key} />
          ))}
        </Steps>

        <div style={{"min-height": "50vh", "margin-top": "16px", "padding-top": "80px", "text-align": "center", "background-color": "#fafafa", "border": "1px dashed #e9e9e9", "border-radius": "2px"}}>{this.steps[this.state.current].content}</div>
        
        <div style={{"margin-top": "24px"}}>
          {this.state.current < this.steps.length - 1 && (
            <Button type="primary" onClick={() => this.next()}>
              Next
            </Button>
          )}
          {this.state.current === this.steps.length - 1 && (
            <Button type="primary" onClick={() => message.success('Processing complete!')}>
              Done
            </Button>
          )}
          {this.state.current > 0 && (
            <Button style={{ margin: '0 8px' }} onClick={() => this.prev()}>
              Previous
            </Button>
          )}
        </div>
      </Fragment>
    );
  }
}

export default quizzLayout