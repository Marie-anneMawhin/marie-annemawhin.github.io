import React, { Component, Fragment } from 'react'
import Education from './Education'
import Publications from './Publications'
class Main extends Component {
  render(): JSX.Element {
    return (
      <Fragment>
        <Education />
        <Publications />
      </Fragment>
    )
  }
}

export default Main
