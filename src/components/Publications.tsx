import React, { Fragment } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SectionHeader from './SectionHeader'

const items = [
  {
    date: '2021',
    title:
      'Longitudinal proteomic profiling of dialysis patients with COVID-19 reveals markers of severity and predictors of death',
    journal: 'eLife 2021;10:e64827',
    authors: [
      'Jack Gisby',
      'Candice L Clarke',
      'Nicholas Medjeral-Thomas',
      'Talat H Malik',
      'Artemis Papadaki',
      'Paige M Mortimer',
      'Norzawani B Buang',
      'Shanice Lewis',
      'Marie Pereira',
      'Frederic Toulza',
      'Ester Fagnano',
      'Marie-Anne Mawhin',
      'Emma E Dutton',
      'Lunnathaya Tapeng',
      'Arianne C Richard',
      'Paul DW Kirk',
      'Jacques Behmoaras',
      'Eleanor Sandhu',
      'Stephen P McAdoo',
      'Maria F Prendecki',
      'Matthew C Pickering',
      'Marina Botto',
      'Michelle Willicombe',
      'David C Thomas',
      'James Edward Peters'
    ],
    link: 'https://elifesciences.org/articles/64827'
  },
  {
    date: '2020',
    title:
      'PD-1 blockade improves Kupffer cell bacterial clearance in acute liver injury',
    journal: 'J Clin Invest. 2021;131(4):e140196',
    authors: [
      'Evangelos Triantafyllou',
      'Cathrin L.C. Gudd',
      'Marie-Anne Mawhin',
      'Hannah C. Husbyn',
      'Francesca M. Trovato',
      'Matthew K. Siggins',
      'Thomas O’Connor',
      'Hiromi Kudo',
      'Sujit K. Mukherjee',
      'Julia A. Wendon',
      'Christine Bernsmeier',
      'Robert D. Goldin',
      'Marina Botto',
      'Wafa Khamri',
      'Mark J.W. McPhail',
      'Lucia A. Possamai',
      'Kevin J. Woollard',
      'Charalambos G. Antoniades',
      'Mark R. Thursz'
    ],
    link: 'https://www.jci.org/articles/view/140196/ga'
  },
  {
    date: '2020',
    title:
      'In-silico analysis of myeloid cells across the animal kingdom reveals neutrophil evolution by colony-stimulating factors',
    journal: 'eLife 2020;9:e60214',
    authors: [
      'Damilola Pinheiro',
      'Marie-Anne Mawhin',
      'Maria Prendecki',
      'Kevin J Woollard'
    ],
    link: 'https://elifesciences.org/articles/60214'
  },
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
      <div key={index} className="fw4 ph3 black-60 mb5-ns">
        <p className="mb1">
          <span className="f5 f4-m f3-l mid-gray">{title}</span>
          <span className="f6 f5-m f4-l fr">{date}</span>
        </p>
        <p className="f6 f5-m f4-l mb3 lh-copy">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="link dark-blue pl1"
          >
            {journal}
            <span className="f7 pl2">
              <FontAwesomeIcon icon={['fas', 'external-link-alt']} />
            </span>
          </a>
        </p>
        <p className="f7 f6-m f5-l gray mv1 lh-copy i">{authors.join(', ')}</p>
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
