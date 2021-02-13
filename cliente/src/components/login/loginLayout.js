import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Row, Card, Col } from 'antd'
import LoginForm from './loginForm'
import CreateAccountForm from './createAccountForm'
import * as LoginActions from './loginActions'
import * as Style from '../../style/myStyle'

class loginLayout extends Component {

  constructor(props) {
    super(props);

    this.state = {
      loginMode: true,
    }
  }

  createAccountMode = () => {
    this.setState({
      loginMode: false,
    });
  };

  loginMode = () => {
    this.setState({
      loginMode: true,
    });
  };

  render() {

    return (
      <Row type="flex" justify="center" align="middle" style={Style.loginMainRow}>
        <Col xs={24} sm={24} md={12} lg={8} xl={6}>
          <Card>
            {this.state.loginMode ? <LoginForm changeMode={this.createAccountMode} isLoading={this.props.isLoading} /> : <CreateAccountForm changeMode={this.loginMode} isLoading={this.props.isLoading} />}
          </Card>
        </Col>
      </Row>
    );

  }
};

function mapStateToProps(state) {
  return {
    isLoading: state.loginReducer.isLoading
  }
}

function mapDispatchToProps(dispatch) {
  return {
    login: (history) => dispatch(LoginActions.login(history))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(loginLayout))

