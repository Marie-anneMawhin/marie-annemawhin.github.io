import React from 'react'
import preval from 'preval.macro'

const LastUpdated: React.FC = () => {
  return (
    <div>
      <p className="tr fw2 black-60">
        Last updated: {preval`module.exports = new Date().toLocaleString();`}.
      </p>
    </div>
  )
}

export default LastUpdated
