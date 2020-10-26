import React, { Fragment } from 'react'
import SectionHeader from './SectionHeader'

const items = {
  key: [
    {
      title: 'Programming',
      skills: [
        'Python (Panda, Seaborn, Matplotlib, SKLearn, Keras)',
        'notions of R and SQL',
        'Jython'
      ]
    },
    {
      title: 'Image Analysis',
      skills: [
        'notions of deep learning/ML in ImageJ',
        'control GPU usage',
        'Python in image processing'
      ]
    },
    {
      title: 'Medical Research',
      skills: [
        'bacteremia',
        'cardiorenal syndrome',
        'atherosclerosis',
        'ischemic strokes',
        'murine models',
        'immunology',
        'platelet biology'
      ]
    },
    {
      title: 'Technical Biology',
      skills: [
        'genotyping',
        'qPCR',
        'Flow cytometry',
        'Intravital',
        'Microscopy',
        'Histology',
        'Molecular biology',
        'Cell biology'
      ]
    },
    {
      title: 'Teamwork & soft skills',
      skills: [
        'more than 5 different teams',
        'national/international collaborations',
        'technical cooperation',
        'supervision of interns'
      ]
    }
  ],
  other: [
    {
      title: 'Oral & written communication',
      skills: ['international conferences', 'scientific writing', 'grants']
    },
    {
      title: 'Other IT skills',
      skills: [
        'MS Office suite (Word, Excel, Ppt)',
        'Photoshop',
        'bibliography (PubMed, Mendeley)',
        'Zen ASF lite',
        'Diva',
        'Flow Jo',
        'ImageJ',
        'Prism',
        '...'
      ]
    },
    {
      title: 'Project Management',
      skills: [
        'time management',
        'feasibility',
        'contingency',
        'management of two small teams (2 persons)'
      ]
    }
  ]
}

const Skills: React.FC = () => {
  const keySkillItems = items.key.map(({ title, skills }, index) => (
    <div key={index} className="tc ph3 fw2">
      <p className="f4 f3-m f2-l black-90 mt4 mb1">{title}</p>
      <p className="f5 f4-m f3-l black-60 mt0 lh-copy">{skills.join(', ')}</p>
    </div>
  ))
  const otherSkillItems = items.other.map(({ title, skills }, index) => (
    <div key={index} className="tc ph3 fw2">
      <p className="f4 f3-m f2-l black-90 mt4 mb1">{title}</p>
      <p className="f5 f4-m f3-l black-60 mt0 lh-copy">{skills.join(', ')}</p>
    </div>
  ))
  return (
    <Fragment>
      <SectionHeader title="Skills" />
      {keySkillItems}
      {otherSkillItems}
    </Fragment>
  )
}

export default Skills
