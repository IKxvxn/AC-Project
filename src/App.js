import React, { Component } from 'react';
import HomeLayout from './components/home/homeLayout'

class App extends Component {
  render() {
    return (
      <div className="App">
        <HomeLayout transcript={this.props.transcript} abortListening={this.props.abortListening} startListening={this.props.startListening} resetTranscript ={this.props.resetTranscript } stopListening ={this.props.stopListening } listening={this.props.listening}/>
      </div>
    );
  }
}

export default App;
