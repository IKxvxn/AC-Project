import React, { Component } from 'react';
import { Route, Switch, withRouter, Link } from 'react-router-dom'
import { Layout, Menu } from 'antd';
import { BookOutlined, BulbOutlined, InfoCircleOutlined, UserOutlined } from '@ant-design/icons';
import { connect } from 'react-redux'
import RepasosLayout from '../repasos/repasosLayout'
import HomeBreadCrumb from './homeBreadCrumb'
import * as HomeActions from './homeActions'
import * as Style from '../../style/myStyle'
import * as Options from '../../assets/opcionesSeccionRepaso'

const { Header, Content, Footer } = Layout;
const { SubMenu } = Menu;

class homeLayout extends Component {


  constructor(props) {
    super(props);

    this.state = {
      collapsed: false,
    };

    switch (window.location.pathname) {
      case "/Perfil":
        this.state.actualMenuTab = '1'
        break;
      case "/Repasos-Anatomia":
        this.state.actualMenuTab = '2'
        break;
      case "/Repasos-Histologia":
        this.state.actualMenuTab = '3'
        break;
      case "/Quizzes":
        this.state.actualMenuTab = '4'
        break;
      case "/Ayuda":
        this.state.actualMenuTab = '5'
        break;
      default:
        this.state.actualMenuTab = '1'
    }

  }
  render() {

    return (
      <Layout style={Style.homeMainLayout}>

        <Header style={Style.HomeLayoutMenu}>
          <Menu theme="light" mode="horizontal" defaultSelectedKeys={[this.state.actualMenuTab]}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              <Link to='/Perfil'>
                Perfil
                  </Link>
            </Menu.Item>
            <SubMenu key="sub1" icon={<BookOutlined />} title="Repasos">
              <Menu.Item key="2" >
                <Link to='/Repasos-Anatomia'>
                  Anatomía
                      </Link>
              </Menu.Item>
              <Menu.Item key="3" >
                <Link to='/Repasos-Histologia'>
                  Histología
                      </Link>
              </Menu.Item>
            </SubMenu>
            <Menu.Item key="4" icon={<BulbOutlined />}>
              <Link to='/Quizzes'>
                Quizzes
                      </Link>
            </Menu.Item>
            <Menu.Item key="5" icon={<InfoCircleOutlined />}>
              <Link to='/Ayuda'>
                Ayuda
                        </Link>
            </Menu.Item>
          </Menu>
        </Header>

        <Layout>

          <Header style={Style.homeLayoutHeader} />
          <Content style={Style.homeLayoutMainContent}>

            <HomeBreadCrumb  pathName={""} /> 

            <Content style={Style.homeLayoutSecondaryContent}>
              <Switch>
                <Route path='/Perfil' render={() => <RepasosLayout sections={[]} />} />
                <Route path='/Repasos-Anatomia' render={() => <RepasosLayout sections={Options.categoriasAnatomía} />} />
                <Route path='/Repasos-Histologia' render={() => <RepasosLayout sections={Options.categoriasHistología} />} />
                <Route path='/Quizzes' render={() => <RepasosLayout sections={[]} />} />
                <Route path='/Ayuda' render={() => <RepasosLayout sections={[]} />} />
              </Switch>
            </Content>

          </Content>

          <Footer style={Style.homeLayoutFooter}>Creado por Kevin A.</Footer>

        </Layout>
      </Layout>

    );
  }
}

function mapStateToProps(state) {
  return {
    Color_Actual: state.homeReducer.Color_Actual
  }
}

function mapDispatchToProps(dispatch) {
  return {
    cambiarColor: () => dispatch(HomeActions.cambiarColor())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(homeLayout))

