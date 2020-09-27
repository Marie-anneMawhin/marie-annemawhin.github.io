import React from 'react'
const SectionHeader: React.FC<{ title: string }> = (props: {
  title: string
}) => (
  <p id={props.title.toLowerCase()} className="ph3 pv3 f3 f2-m fw6 f1-l navy">
    {props.title}
  </p>
)

export default SectionHeader
