import React, { useEffect } from 'react'

import Main from './components/Main'
import NavBar from './components/NavBar'
import { scrollToId } from './utils/scrollToId'

function App(): JSX.Element {
  useEffect(() => {
    const location = window.location.search.substring(3)
    if (location) scrollToId(location, 'auto')
  })

  return (
    <div className="App vh-100 avenir">
      <div className="fl w-third w-30-m w-20-l h-100 overflow-y-scroll pa2 pa3-ns bg-navy washed-blue o-80">
        <NavBar />
      </div>
      <div className="fl w-two-thirds w-70-m w-80-l pa2 pa3-ns h-100 overflow-y-scroll">
        <Main />
      </div>
    </div>
  )
}

export default App
