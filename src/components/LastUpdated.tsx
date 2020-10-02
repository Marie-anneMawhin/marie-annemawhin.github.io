import React from 'react'
import preval from 'preval.macro'

const LastUpdated: React.FC = () => {
  return (
    <div>
      <p className="tr  black-50">
        Last updated: {preval`module.exports = new Date().toLocaleString();`}.
      </p>
    </div>
  )
}

export default LastUpdated
