import React, { Component, Fragment } from 'react'
import Bio from './Bio'
import Contact from './Contact'
import Skills from './Skills'
import Projects from './Projects'
import Experience from './Experience'
import Education from './Education'
import Publications from './Publications'
import Achievements from './Achievements'
import Languages from './Languages'
import Interests from './Interests'
class Main extends Component {
  render(): JSX.Element {
    return (
      <Fragment>
        <Bio />
        <Contact />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Publications />
        <Achievements />
        <Languages />
        <Interests />
      </Fragment>
    )
  }
}

export default Main
