import React, { Fragment } from 'react'

import SectionHeader from './SectionHeader'
import { scrollToId } from '../utils/scrollToId'

const Bio: React.FC = () => {
  const linkClass = 'link py-0 px-2 ba bw0 dark-blue bg-white pointer'
  return (
    <Fragment>
      <SectionHeader title="Bio" />
      <div className="f6 f5-m f4-l fw4 ph3 mid-gray tj">
        <p className="mv4">
          Hello, I&apos;m Marie-anne, I&apos;m a data scientist with a PhD in
          cardiovascular immunology.
        </p>
        <p className="mv4">
          I am currently working as a data scientist freelancer for EPRI,
          evaluating electrical power systems using machine learning.
        </p>
        <p className="mv4">
          During my post doctoral position as a research associate in
          cardiorenal science, I have written Python scripts to analyse images,
          automate PCR analyses, and to programtically clean and analyse a large
          clinical dataset using HTTP requests to the ICD API. I have also used
          Python to plot evolutionary data in a heatmap and conduct flow
          cytometry analysis with a parametric UMAP (deep learning), which are
          both published or in revision.
        </p>
        <p className="mv4">
          At the moment I am completing an MSc-level data science course —
          including a project on identifying leucocytes in images using CNN —
          certified by the Paris Sorbonne University. I also recently took part
          in two other bootcamps;
          <button onClick={() => scrollToId('ds4a')} className={linkClass}>
            DS4A
          </button>
          on vaccine response prediction with classification, and
          <button onClick={() => scrollToId('s2ds')} className={linkClass}>
            S2DS
          </button>
          on electrical component assessement involving clustering, regression
          and survival analysis along with data simulation using GAN.
        </p>
        <p className="mv4">
          I am interested in combining my biology knowledge with my data science
          skills, especially in image anyalysis, machine learning and computer
          vision. I find great pleasure and satisfication in the scientific
          reasoning, problem solving, automation and efficiency of programming.
          I am thrilled to be part of the future of data-driven biological
          research.
        </p>
      </div>
    </Fragment>
  )
}

export default Bio
