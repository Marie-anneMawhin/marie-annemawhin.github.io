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
    <div key={index} className="fl w-100 w-50-ns w-25-l tc ph3 fw4">
      <p className="f5 f4-m f3-l mid-gray mv3">
        <span>{flag}</span>&nbsp;
        <span>{language}</span>
      </p>
      <p className="f6 f5-m f4-l gray mt0 lh-copy">{level}</p>
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
