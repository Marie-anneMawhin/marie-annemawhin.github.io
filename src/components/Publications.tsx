import React, { Fragment } from 'react'
import SectionHeader from './SectionHeader'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const items = [
  {
    date: '2020',
    title:
      'Protective effect of ApoA1- Milano in a rat model of large vessel occlusion stroke',
    journal: 'Stroke, STROKEAHA119027898',
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
    ],
    link: 'https://pubmed.ncbi.nlm.nih.gov/32404037/'
  },
  {
    date: '2013–2017',
    title: 'Glycoprotein VI in securing vascular integrity in inflamed vessels',
    journal: 'Res. Pract. Thromb. Haemost. 2, 228–239',
    authors: [
      'Y.Boulaftali',
      'M.A. MAWHIN',
      'M. Jandrot-Perrus',
      'B. Ho-Tin-Noé'
    ],
    link: 'https://pubmed.ncbi.nlm.nih.gov/30046725/'
  },
  {
    date: '2010',
    title:
      'Neutrophils recruited by leukotriene B4 induce plaque destabilization during endotoxemia',
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
    ],
    link: 'https://pubmed.ncbi.nlm.nih.gov/29800147/'
  },
  {
    date: '2009–2012',
    title:
      'Blocking the receptor EP3 to PGE2 as a way to safely prevent atherothrombosis',
    journal: 'Recept. Clin. Investig. 3',
    authors: ['M.A. MAWHIN', 'J.E. Fabre'],
    link: 'https://pubmed.ncbi.nlm.nih.gov/26463849/'
  },
  {
    date: '2008–2009',
    title:
      'A rational target to prevent atherothrombosis without inducing bleeding.',
    journal: 'Prostaglandins Other Lipid Mediat. 121, 4–16',
    authors: ['M.A. MAWHIN', ' P. Tilly', 'J.E. Fabre'],
    link:
      'https://www.sciencedirect.com/science/article/abs/pii/S1098882315300149'
  },
  {
    date: '2006–2008',
    title:
      'Dendritic cells differently phagocytose activated or apoptotic blood platelets',
    journal: 'J. Thromb. Haemost. 11, 205',
    authors: [
      'B. Maitre',
      'M.A. MAWHIN',
      'A. Eckly',
      'V. Heim',
      'H. De La Salle',
      'C. Gachet'
    ],
    link: 'https://insights.ovid.com/crossref?an=00149457-201307002-00464'
  }
]

const Publications: React.FC = () => {
  const publicationItems = items.map(
    ({ date, title, journal, authors, link }, index) => (
      <div key={index} className="tc ph3 fw2">
        <p className="f4 f3-m f2-l mt4 mb1">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="link dark-blue"
          >
            <span>{title}</span>
            <span className="f7 v-mid pl2">
              <FontAwesomeIcon icon={['fas', 'external-link-alt']} />
            </span>
          </a>
        </p>
        <p className="f7 f6-m f5-l black-60 mv1 lh-copy i">
          {authors.join(', ')}
        </p>
        <p className="f5 f4-m f3-l black-60 mv1 lh-copy">
          <span>{date}</span> - <span>{journal}</span>
        </p>
      </div>
    )
  )
  return (
    <Fragment>
      <SectionHeader title="Publications" />
      {publicationItems}
    </Fragment>
  )
}

export default Publications
