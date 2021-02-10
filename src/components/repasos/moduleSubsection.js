import React, { Component } from 'react';
import { Row, Collapse } from 'antd';
import ModuleSubsectionElement from './moduleSubsectionElement'
import * as Style from '../../style/myStyle'


class moduleSubsection extends Component {

  render() {
    return (
      <Collapse.Panel {...this.props} showArrow={false} header={<b>{this.props.subsectionName}</b>} key={this.props.subsectionKey}>
        <Row gutter={Style.responsiveRow} justify="start">
          {this.props.subsectionElements.map(
            function (subsectionElement) { return <ModuleSubsectionElement subsectionElementName={subsectionElement} /> }
          )}
        </Row>
      </Collapse.Panel>
    );
  }
}

export default moduleSubsection

