import React, { Component } from 'react'
class NavBar extends Component {
  render() {
    return (
      <div>
        <h1 className="f4 bold center mw6">Marie-anne Mawhin</h1>
        <ul className="list pl0 ml0 center mw6">
          <li className="ph3 pv3 bb b--light-silver">Contact</li>
          <li className="ph3 pv3 bb b--light-silver">Skills</li>
          <li className="ph3 pv3 bb b--light-silver">Languages</li>
          <li className="ph3 pv3 bb b--light-silver">Interests</li>
          <li className="ph3 pv3 bb b--light-silver">Experience</li>
          <li className="ph3 pv3 bb b--light-silver">Education</li>
          <li className="ph3 pv3 bb b--light-silver">Projects</li>
          <li className="ph3 pv3">Achievements</li>
        </ul>
      </div>
    )
  }
}
export default NavBar
