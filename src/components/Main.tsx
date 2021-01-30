import React, { Component, Fragment } from 'react'

import Achievements from './Achievements'
import Bio from './Bio'
import Education from './Education'
import Experience from './Experience'
import Interests from './Interests'
import Languages from './Languages'
import LastUpdated from './LastUpdated'
import Projects from './Projects'
import Publications from './Publications'
import Skills from './Skills'
import Social from './Social'

class Main extends Component {
  render(): JSX.Element {
    return (
      <Fragment>
        <Bio />
        <Social />
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
