import React, { Component } from 'react';
import { Divider, Collapse, Affix } from 'antd';
import ModuleSubsection from './moduleSubsection'
import * as Style from '../../style/myStyle'


class moduleSection extends Component {

  render() {

    return (
      <div>

        <Affix offsetTop={50}>
          <Divider style={Style.repasosMainDividerAffix}>{this.props.sectionName}</Divider>
        </Affix>

        <Collapse>
          {this.props.subsections.map(
            function (subsection) { return <ModuleSubsection subsectionKey={subsection.key} subsectionName={subsection.nombre} subsectionElements={subsection.elementos} /> }
          )}
        </Collapse>

      </div>
    );
  }
}

export default moduleSection

