import React from 'react'
import NavBar from './components/NavBar'

function App() {
  return (
    <div className="App mw9 center ph3-ns">
      <div className="fl w-25 pa2">
        <NavBar />
      </div>
      <div className="fl w-75 pa2">
        <p className="gold">Hello</p>
      </div>
    </div>
  )
}

export default App
