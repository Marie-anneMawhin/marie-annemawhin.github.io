import React, { Fragment } from 'react'
import SectionHeader from './SectionHeader'

const items = [
  { language: 'French', flag: '🇫🇷', level: 'native' },
  { language: 'English', flag: '🇬🇧', level: 'fluent' },
  { language: 'German', flag: '🇩🇪', level: 'intermediate' },
  { language: 'Spanish', flag: '🇪🇸', level: 'elementary' }
]

const Languages: React.FC = () => {
  const keySkillItems = items.map(({ language, flag, level }, index) => (
    <div key={index} className="tc ph3">
      <p className="f4 f3-m f2-l fw2 black-90 mv3">
        <span>{flag}</span>&nbsp;
        <span>{language}</span>
      </p>
      <p className="f5 f4-m f3-l fw2 black-50 mt0 lh-copy">{level}</p>
    </div>
  ))
  return (
    <Fragment>
      <SectionHeader title="Languages" />
      {keySkillItems}
    </Fragment>
  )
}

export default Languages
