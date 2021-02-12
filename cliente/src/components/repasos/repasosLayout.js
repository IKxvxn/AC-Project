import React, { Component } from 'react';
import ModuleSection from './moduleSection'

class repasosLayout extends Component {

  render() {

    return (

      <div >
        {this.props.sections.map(
          function (section) { return <ModuleSection sectionName={section.nombre} subsections={section.subcategorias} /> }
        )}
      </div>

    );
  }
}

export default repasosLayout

