import React, { Component } from 'react';
import { Route, Switch, withRouter, Link } from 'react-router-dom'
import { Layout, Menu, Typography } from 'antd';
import { BookOutlined, BulbOutlined, UserOutlined } from '@ant-design/icons';
import { connect } from 'react-redux'
import RepasosLayout from '../repasos/repasosLayout'
import HomeBreadCrumb from './homeBreadCrumb'
import * as LoginActions from '../login/loginActions'
import * as HomeActions from './homeActions'
import * as Style from '../../style/myStyle'
import * as Options from '../../assets/opcionesSeccionRepaso'
import * as CLIENT_ROUTES from '../../assets/clientRoutes'

const { Header, Content, Footer } = Layout;
const { SubMenu } = Menu;

class homeLayout extends Component {

  constructor(props) {
    super(props);

    this.state = {
      collapsed: false,
    };

    switch (window.location.pathname) {
      case CLIENT_ROUTES.homeRoute:
        this.state.actualMenuTab = '1'
        break;
      case CLIENT_ROUTES.accountRoute:
        this.state.actualMenuTab = '2'
        break;
      case CLIENT_ROUTES.anatoCardsRoute:
        this.state.actualMenuTab = '3'
        break;
      case CLIENT_ROUTES.histoCardsRoute:
        this.state.actualMenuTab = '4'
        break;
      case CLIENT_ROUTES.quizzesRoute:
        this.state.actualMenuTab = '5'
        break;
      default:
        this.state.actualMenuTab = '1'
    }

  }

  handleLogout = () => {
    this.props.logout(this.props.history);
  }

  render() {

    return (
      <Layout style={Style.homeMainLayout}>

        <Header style={Style.HomeLayoutMenu}>
          <Menu style={Style.homeMenuText} theme="light" mode="horizontal" defaultSelectedKeys={[this.state.actualMenuTab]}>
            <Menu.Item key="1">
              <Link to={CLIENT_ROUTES.homeRoute}>
                <Typography style={Style.homeLogoText}>medCards</Typography>
              </Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<UserOutlined />}>
              <Link to={CLIENT_ROUTES.accountRoute}>
                Cuenta
              </Link>
            </Menu.Item>
            <SubMenu key="sub1" icon={<BookOutlined />} title="Tarjetas">
              <Menu.Item key="3" >
                <Link to={CLIENT_ROUTES.anatoCardsRoute}>
                  Anatomía
                </Link>
              </Menu.Item>
              <Menu.Item key="4" >
                <Link to={CLIENT_ROUTES.histoCardsRoute}>
                  Histología
                </Link>
              </Menu.Item>
            </SubMenu>
            <Menu.Item key="5" icon={<BulbOutlined />}>
              <Link to={CLIENT_ROUTES.quizzesRoute}>
                Quizzes
              </Link>
            </Menu.Item>
            <Menu.Item onClick={this.handleLogout} style={Style.homeLogoutButton} key="6" icon={<BulbOutlined />}>
              Cerrar Sesión
            </Menu.Item>

          </Menu>
        </Header>

        <Layout>

          <Header style={Style.homeLayoutHeader} />
          <Content style={Style.homeLayoutMainContent}>

            <HomeBreadCrumb pathName={""} />

            <Content style={Style.homeLayoutSecondaryContent}>
              <Switch>
                <Route exact path={CLIENT_ROUTES.homeRoute} render={() => <RepasosLayout sections={[]} />} />
                <Route exact path={CLIENT_ROUTES.accountRoute} render={() => <RepasosLayout sections={[]} />} />
                <Route exact path={CLIENT_ROUTES.anatoCardsRoute} render={() => <RepasosLayout sections={Options.categoriasAnatomía} />} />
                <Route exact path={CLIENT_ROUTES.histoCardsRoute} render={() => <RepasosLayout sections={Options.categoriasHistología} />} />
                <Route exact path={CLIENT_ROUTES.quizzesRoute} render={() => <RepasosLayout sections={[]} />} />
              </Switch>
            </Content>

          </Content>

          <Footer style={Style.homeLayoutFooter}>Creado por Kevin A.</Footer>

        </Layout>
      </Layout>

    );
  }

  componentDidMount() {
    if(!this.props.isSettingUpAccount){
      this.props.loadSessionState(this.props.history)
    }
  }

}

function mapStateToProps(state) {
  return {
    user: state.loginReducer.user,
    isSettingUpAccount: state.loginReducer.isLoading
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loadSessionState: (history) => dispatch(LoginActions.loadSessionState(history)),
    logout: (history) => dispatch(LoginActions.logout(history))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(homeLayout))

