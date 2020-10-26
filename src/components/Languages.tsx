import React from 'react'
import SectionHeader from './SectionHeader'

const items = [
  { language: 'French', flag: '🇫🇷', level: 'native' },
  { language: 'English', flag: '🇬🇧', level: 'fluent' },
  { language: 'German', flag: '🇩🇪', level: 'intermediate' },
  { language: 'Spanish', flag: '🇪🇸', level: 'elementary' }
]

const Languages: React.FC = () => {
  const languageItems = items.map(({ language, flag, level }, index) => (
    <div key={index} className="fl w-100 w-50-ns w-25-l tc ph3 fw2">
      <p className="f4 f3-m f2-l black-90 mv3">
        <span>{flag}</span>&nbsp;
        <span>{language}</span>
      </p>
      <p className="f5 f4-m f3-l black-60 mt0 lh-copy">{level}</p>
    </div>
  ))
  return (
    <div className="mb4">
      <SectionHeader title="Languages" />
      <div className="cf">{languageItems}</div>
    </div>
  )
}

export default Languages
