import React, { Component } from 'react'
class NavBar extends Component {
  render() {
    return (
      <div>
        <h1 className="f4 bold center mw6">Marie-anne Mawhin</h1>
        <ul className="list pl0 ml0 center mw6">
          <li className="pv3 bb b--washed-blue">
            <a className="f5 link dim washed-blue bg-navy" href="#0">
              Contact
            </a>
          </li>
          <li className="pv3 bb b--washed-blue">
            <a className="f5 link dim washed-blue bg-navy" href="#0">
              Skills
            </a>
          </li>
          <li className="pv3 bb b--washed-blue">
            <a className="f5 link dim washed-blue bg-navy" href="#0">
              Languages
            </a>
          </li>
          <li className="pv3 bb b--washed-blue">
            <a className="f5 link dim washed-blue bg-navy" href="#0">
              Interests
            </a>
          </li>
          <li className="pv3 bb b--washed-blue">
            <a className="f5 link dim washed-blue bg-navy" href="#0">
              Experience
            </a>
          </li>
          <li className="pv3 bb b--washed-blue">
            <a className="f5 link dim washed-blue bg-navy" href="#0">
              Education
            </a>
          </li>
          <li className="pv3 bb b--washed-blue">
            <a className="f5 link dim washed-blue bg-navy" href="#0">
              Projects
            </a>
          </li>
          <li className="pv3">
            <a className="f5 link dim washed-blue bg-navy" href="#0">
              Achievements
            </a>
          </li>
        </ul>
      </div>
    )
  }
}
export default NavBar
