import React from 'react'
const SectionHeader: React.FC<{ title: string }> = (props: {
  title: string
}) => (
  <div
    id={props.title.toLowerCase()}
    className="mh3 mt4 mb3 f4 f3-m f2-l fw5 navy"
  >
    {props.title}
  </div>
)

export default SectionHeader
