import React, { Component, Fragment } from 'react'
import Bio from './Bio'
import Contact from './Contact'
import Skills from './Skills'
import Languages from './Languages'
import Interests from './Interests'
import Experience from './Experience'
import Education from './Education'
import Publications from './Publications'
import Achievements from './Achievements'
class Main extends Component {
  render(): JSX.Element {
    return (
      <Fragment>
        <Bio />
        <Contact />
        <Skills />
        <Languages />
        <Interests />
        <Experience />
        <Education />
        <Publications />
        <Achievements />
      </Fragment>
    )
  }
}

export default Main
