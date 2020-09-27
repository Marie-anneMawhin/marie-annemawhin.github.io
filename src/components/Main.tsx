import React, { Component, Fragment } from 'react'
import Skills from './Skills'
import Education from './Education'
import Publications from './Publications'
class Main extends Component {
  render(): JSX.Element {
    return (
      <Fragment>
        <Skills />
        <Education />
        <Publications />
      </Fragment>
    )
  }
}

export default Main
