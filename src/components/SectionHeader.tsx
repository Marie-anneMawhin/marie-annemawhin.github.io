import React from 'react'
const SectionHeader: React.FC<{ title: string }> = (props: {
  title: string
}) => (
  <p id={props.title.toLowerCase()} className="ph3 pv3 f4 f3-m f2-l fw5 navy">
    {props.title}
  </p>
)

export default SectionHeader
