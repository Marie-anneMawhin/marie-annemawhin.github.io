import React from 'react'
import SectionHeader from './SectionHeader'

const items = {
  technical: [
    {
      title: 'Languages',
      skills: ['Python, notions of R, SQL and Bash']
    },
    {
      title: 'Software/Tools',
      skills: [
        'Linux',
        'JupyterLab, RStudio',
        'Version control: Git, GitHub',
        'Anaconda, Bioconda'
      ]
    },
    { title: 'Data Analysis', skills: ['Pandas', 'Numpy', 'Dask', 'Spark'] },
    {
      title: 'Data Visualisation',
      skills: ['Seaborn, Matplotlib', 'Plotly, Bokeh']
    },
    {
      title: 'Machine Learning',
      skills: ['Scikit-learn, XGBoost', 'Scikit-survival, Scikit-Image']
    },
    {
      title: 'Deep Learning',
      skills: ['Keras, TensorFlow', 'GAN for data simulation (SVC)']
    },
    {
      title: 'Others',
      skills: [
        'Bioimage analysis',
        'RNAseq: Limma, Scanpy, Seurat',
        'Statistical skills: Scipy, Statsmodels',
        'Web scraping'
      ]
    }
  ],
  key: [
    {
      title: 'Programming',
      skills: [
        'Python (Panda, Seaborn, Matplotlib, Scikit-Learn, TensorFlow, Keras)',
        'Jupyter',
        'Git/GitHub',
        'notions of R, SQL and APIs',
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
  const technicalSkills = items.technical.map(({ title, skills }, index) => (
    <div key={index} className="fl w-100 w-50-m w-33-ns fw4">
      <p className="mb1 mid-gray">{title}</p>
      {skills.map((skill) => (
        <p className="f6 f5-m f4-l mv1 lh-copy gray" key={skill}>
          {skill}
        </p>
      ))}
    </div>
  ))

  return (
    <div className="mb4">
      <SectionHeader title="Skills" />
      <div className="cf ph3 f5 f4-m f3-l">
        <p className="mid-gray mt4 mb2 tc">Technical Skills</p>
        {technicalSkills}
      </div>
    </div>
  )
}

export default Skills
