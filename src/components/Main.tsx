import React, { Component, Fragment } from 'react'
import Skills from './Skills'
import Languages from './Languages'
import Interests from './Interests'
import Experience from './Experience'
import Education from './Education'
import Publications from './Publications'
class Main extends Component {
  render(): JSX.Element {
    return (
      <Fragment>
        <Skills />
        <Languages />
        <Interests />
        <Experience />
        <Education />
        <Publications />
      </Fragment>
    )
  }
}

export default Main
