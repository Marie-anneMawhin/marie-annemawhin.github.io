import React, { Component, Fragment } from 'react'
import Skills from './Skills'
import Languages from './Languages'
import Education from './Education'
import Publications from './Publications'
class Main extends Component {
  render(): JSX.Element {
    return (
      <Fragment>
        <Skills />
        <Languages />
        <Education />
        <Publications />
      </Fragment>
    )
  }
}

export default Main
