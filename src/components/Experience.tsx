import React, { Fragment } from 'react'

import SectionHeader from './SectionHeader'

const items = [
  {
    date: 'Feb. 2020 - present',
    role: 'Data scientist (Freelance)',
    location: 'Pivigo/EPRI, Remote',
    specialisation:
      'Evaluating nondestructive examinations of component lifespan in electrical power systems using machine learning',
    skills: [],
    tasks: [
      'Improved accuracy of exchanger defect sizing using regression with a custom ML library, SHAP.',
      'Developed non-destructive steel assessment using clustering with a custom distance metric (HAC, Kmeans, MDS, UMAP, PCA, PcoA).',
      'Predicted fracture resistance with simulated data (GAN, regression) to prevent failure.',
      'Assessed efficacy of continuous tendon monitoring in nuclear plants.',
      'Analysed survival of blades (survival analysis).'
    ]
  },
  {
    date: 'Oct. - Nov. 2020',
    role: 'Data scientist (Intern)',
    location: 'Pivigo/EPRI, Remote',
    specialisation:
      'Evaluating nondestructive examinations of component lifespan in electrical power systems using machine learning',
    skills: [
      'extracting data from raw (excel, pdf)',
      'feature selection and engineering (AUC, CV), EDA and PCA',
      'data simulation (Gaussian sampling, CopulanGAN)',
      'hyperparameterstuning: bayesian gridsearch.',
      'clustering: hierarchical (inconsistency, cophenetic coefficient correlation), K-Means, sklearn (Gaussian mixture, Mean Shift, agglomerative, spectral, DBSCAN, OPTICS, BIRCH)',
      'regression: Lasso, Ridge, ElasticNet, SVR, KNN, Random Forest, XGBoost Regressor',
      "survival analysis: using lifelines and scikit_survival Kaplan Meier, Cox's PH, Random Forest Survival, SVM, Gradient Boosting",
      'feature importance: coefficient, gini impurity, permutation'
    ],
    tasks: [
      '3 independent tasks involving clustering, regression and survival analysis along with data simulation with GAN',
      'provided significant tools to assess the quality of steel components to prevent failures, to allow measurement of steel embrittlement for safety and to predict cracking of turbine blades, a phenomenon that has been estimated to cost up to $1 billion a year to the industry',
      'helped design EPRI future research directions.'
    ]
  },
  {
    date: '2018 - present',
    role: 'Research associate in Cardiorenal Science',
    location: 'Imperial College, London',
    specialisation: 'Macrophages in uremic cardiomyopathy',
    skills: [
      'image analysis programming (macros java/python)',
      'python for biology (pandas, matplotlib, seaborn)',
      'notions of API requests',
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
      'The role of platelets in cancer and inflammation: Ho-Tin-Noé’s Team (benoit.ho-tin-noe@inserm.fr)',
    skills: [],
    tasks: ['benchwork', 'contribution to protocol design']
  },
  {
    date: '2013 - 2017',
    role: '  Project Leader in Cardiovascular Immunology (PhD)',
    location: 'INSERM U1148, Paris / IGBMC UMR_704, Strasbourg',
    specialisation:
      'The role of neutrophils and leukotrienes in atherosclerosis during endotoxemia',
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
    specialisation: 'Platelets and dendritic cells in autoimmunity',
    skills: [],
    tasks: ['benchwork', 'reporting', 'problem solving']
  }
]

const Experience: React.FC = () => {
  const experienceItems = items.map(
    ({ date, role, location, specialisation, skills, tasks }, index) => (
      <div key={index} className="fw4 ph3 black-60 mv5">
        <p className="mt4 mb1">
          <span className="f5 f4-m f3-l mid-gray">{role}</span>
          <span className="f6 f5-m f4-l fr">{date}</span>
        </p>
        <p className="f6 f5-m f4-l mb3 mt0">{location}</p>
        <p className="f6 f5-m f4-l mb3 lh-copy mid-gray">{specialisation}</p>
        <p className="f7 f6-m f5-l mb3 lh-copy i tj">{skills.join(' ◦ ')}</p>
        <p className="f7 f6-m f5-l lh-copy i tj">{tasks.join(' ◦ ')}</p>
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
