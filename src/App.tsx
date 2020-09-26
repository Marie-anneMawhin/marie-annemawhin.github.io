import React from 'react'
import NavBar from './components/NavBar'
import Main from './components/Main'

function App() {
  return (
    <div className="App vh-100 avenir">
      <div className="fl w-third w-30-m w-20-l h-100 pa3 bg-navy washed-blue o-80">
        <NavBar />
      </div>
      <div className="fl w-two-thirds w-70-m w-80-l pa3 h-100 overflow-y-scroll bg-washed-blue">
        <Main />
      </div>
    </div>
  )
}

export default App
