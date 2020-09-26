import React, { Component } from 'react'
class NavBar extends Component {
  render() {
    return (
      <div>
        <h1 className="f4 bold center mw6">Marie-anne Mawhin</h1>
        <ul className="list pl0 ml0 center mw6">
          <li className="ph3 pv3 bb b--washed-blue">Contact</li>
          <li className="ph3 pv3 bb b--washed-blue">Skills</li>
          <li className="ph3 pv3 bb b--washed-blue">Languages</li>
          <li className="ph3 pv3 bb b--washed-blue">Interests</li>
          <li className="ph3 pv3 bb b--washed-blue">Experience</li>
          <li className="ph3 pv3 bb b--washed-blue">Education</li>
          <li className="ph3 pv3 bb b--washed-blue">Projects</li>
          <li className="ph3 pv3">Achievements</li>
        </ul>
      </div>
    )
  }
}
export default NavBar
