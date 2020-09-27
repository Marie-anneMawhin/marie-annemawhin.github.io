import React, { Fragment } from 'react'
import SectionHeader from './SectionHeader'

const items = [
  {
    date: '2020',
    title:
      'Protective effect of ApoA1- Milano in a rat model of large vessel occlusion stroke.',
    journal: 'Stroke.;STROKEAHA119027898',
    authors: [
      'C. Ducroux',
      'J.P. Desilles',
      'M.A. MAWHIN',
      'S. Delbosc',
      'B. Ho-Tin-Noé',
      'V. Ollivier',
      'L. Di Meglio',
      'B. Lapergue',
      'J.B. Michel',
      'P. Amarenco.'
    ]
  },
  {
    date: '2013 - 2017',
    title:
      'Glycoprotein VI in securing vascular integrity in inflamed vessels.',
    journal: 'Res. Pract. Thromb. Haemost. 2, 228–239',
    authors: [
      'Y.Boulaftali',
      'M.A. MAWHIN',
      'M. Jandrot-Perrus',
      'B. Ho-Tin-Noé'
    ]
  },
  {
    date: '2010',
    title:
      'Neutrophils recruited by leukotriene B4 induce plaque destabilization during endotoxemia.',
    journal: 'Cardiovasc. Res.',
    authors: [
      'M.A. MAWHIN',
      'P. Tilly',
      'G. Zirka',
      'A.L. Charles',
      'F. Slimani',
      'J.L. Vonesh',
      'J.B. Michel',
      'M. Back',
      'X. Norel',
      'J.E. Fabre'
    ]
  },
  {
    date: '2009 - 2012',
    title:
      'Blocking the receptor EP3 to PGE2 as a way to safely prevent atherothrombosis.',
    journal: 'Recept. Clin. Investig. 3',
    authors: []
  },
  {
    date: '2008 - 2009',
    title:
      'A rational target to prevent atherothrombosis without inducing bleeding.',
    journal: 'Prostaglandins Other Lipid Mediat. 121, 4–16'
  },
  {
    date: '2006 - 2008',
    title:
      'Dendritic cells differently phagocytose activated or apoptotic blood platelets.',
    journal: 'J. Thromb. Haemost. 11, 205'
  }
]

const Publications: React.FC = () => {
  const publicationItems = items.map(({ date, title, journal }, index) => (
    <div key={index} className="tc ph3">
      <p className="f4 f3-m f2-l fw2 black-90 mv3">{title}</p>
      <p className="f5 f4-m f3-l fw2 black-50 mt0 lh-copy">
        <span>{date}</span>&nbsp;<span>{journal}</span>
      </p>
    </div>
  ))
  return (
    <Fragment>
      <SectionHeader title="Publications" />
      {publicationItems}
    </Fragment>
  )
}

export default Publications
