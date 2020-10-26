import React, { Fragment } from 'react'
import SectionHeader from './SectionHeader'

const items = [
  {
    date: '2020 - present',
    role: 'Research associate in Cardiorenal Science',
    location: 'Imperial College, London',
    specialisation: 'Macrophages in uremic cardiomyopathy',
    skills: [
      'image analysis programming (macros java/python)',
      'python for biology (pandas, matplotlib, seaborn)',
      'notion of API request',
      'statistical skills',
      'managing projects',
      'conducting and designing experiments',
      'organising meeting',
      'reporting',
      'time-management'
    ],
    tasks: []
  },
  {
    date: '2018',
    role: 'Research scientist in Cardiovascular Science',
    location: 'INSERM U1148, Bichat Hospital, Paris',
    specialisation:
      'Study of rtPA vectorization by amino-fucodain in the treatment of ischemic stroke',
    skills: [],
    tasks: [
      'managing projects',
      'conducting and designing experiments',
      'organising meetings',
      'reporting',
      'time-management'
    ]
  },
  {
    date: '2017',
    role: 'Research associate in Platelet and Cancer biology',
    location: 'INSERM U1148, Bichat Hospital, Paris',
    specialisation:
      'Ho-Tin-Noé’s Team (benoit.ho-tin-noe@inserm.fr): role of platelets in cancer and inflammation',
    skills: [],
    tasks: ['benchwork', 'contribution to protocol design']
  },
  {
    date: '2013 - 2017',
    role: '  Project Leader in Cardiovascular Immunology (PhD)',
    location: 'INSERM U1148, Paris / IGBMC UMR_704, Strasbourg',
    specialisation:
      'Fabre’s Team (jean-etienne.fabre@inserm.fr): role of neutrophils and leukotrienes in atherosclerosis during endotoxemia',
    skills: [],
    tasks: [
      'managing the whole project',
      'conducting and designing experiments',
      'supervision and training',
      'managing collaborations',
      'problem solving',
      'budgeting',
      'reporting'
    ]
  },
  {
    date: '2011 - 2012',
    role: 'Intern in Platelet Biology and Immunology (M.Sc)',
    location: 'UMRS_949, EFS, Strasbourg',
    specialisation:
      'Maitre and Gachet’s Team (blandine.maitre@efs-alsace.fr): platelets and dendritic cells in autoimmunity',
    skills: [],
    tasks: ['benchwork', 'reporting', 'problem solving']
  }
]

const Experience: React.FC = () => {
  const experienceItems = items.map(
    ({ date, role, location, specialisation, skills, tasks }, index) => (
      <div key={index} className="tc fw2 ph4 black-60">
        <p className="f4 f3-m f2-l black-90 mt4 mb1">{role}</p>
        <p className="f5 f4-m f3-l mv1 lh-copy">{specialisation}</p>
        <p className="f5 f4-m f3-l mv1 lh-copy">
          <span>{date}</span>&nbsp;<span>{location}</span>
        </p>
        <p className="f7 f6-m f5-l mv1 lh-copy i">{skills.join(', ')}</p>
        <p className="f7 f6-m f5-l mv1 lh-copy i">{tasks.join(', ')}</p>
      </div>
    )
  )
  return (
    <Fragment>
      <SectionHeader title="Experience" />
      {experienceItems}
    </Fragment>
  )
}

export default Experience
