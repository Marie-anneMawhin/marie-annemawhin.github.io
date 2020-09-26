import React from 'react'
import NavBar from './components/NavBar'

function App() {
  return (
    <div className="App vh-100 avenir">
      <div className="fl w-200 h-100 pa3 bg-navy light-gray o-80">
        <NavBar />
      </div>
      <div className="fl pa3">
        <p className="gold">Hello</p>
      </div>
    </div>
  )
}

export default App
