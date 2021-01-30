import React, { Component, Fragment } from 'react'

import Achievements from './Achievements'
import Bio from './Bio'
import Contact from './Contact'
import Education from './Education'
import Experience from './Experience'
import Interests from './Interests'
import Languages from './Languages'
import LastUpdated from './LastUpdated'
import Projects from './Projects'
import Publications from './Publications'
import Skills from './Skills'
class Main extends Component {
  render(): JSX.Element {
    return (
      <Fragment>
        <Bio />
        <Contact />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Achievements />
        <Publications />
        <Interests />
        <Languages />
        <LastUpdated />
      </Fragment>
    )
  }
}

export default Main
