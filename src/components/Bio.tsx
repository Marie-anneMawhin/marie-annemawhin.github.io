import React, { Fragment } from 'react'

import SectionHeader from './SectionHeader'
import { scrollToId } from '../utils/scrollToId'

const Bio: React.FC = () => {
  return (
    <Fragment>
      <SectionHeader title="Bio" />
      <div className="f6 f5-m f4-l fw4 ph3 mid-gray tj">
        <p className="mv4">Hello, I&apos;m Marie-anne.</p>
        <p className="mv4">
          I&apos;m a biologist in cardiovascular immunology and data scientist.
        </p>
        <p className="mv4">
          I&apos;m currently working as a research associate in cardiorenal
          science, where I&apos;ve written several Python scripts to analyse
          images, automate PCR analyses, and to programtically clean and analyse
          a large clinical dataset using API requests to the ICD API. I have
          also used Python to plot evolutionary data in a heatmap and conduct
          flow cytometry analysis with a parametric UMAP (deep learning), which
          are both published or in revision.
        </p>
        <p className="mv4">
          I&apos;m also currently working (February - March 2020) part-time for
          EPRI as a data scientist evaluating electrical power systems using
          machine learning.
        </p>
        <p className="mv4">
          I&apos;ve recently taken part in two bootcamps;&nbsp;
          <button
            onClick={() => scrollToId('ds4a')}
            className="link pa0 ba bw0 dark-blue bg-white pointer"
          >
            DS4A
          </button>
          &nbsp;on vaccine response prediction with classification, and&nbsp;
          <button
            onClick={() => scrollToId('s2ds')}
            className="link pa0 ba bw0 dark-blue bg-white pointer"
          >
            S2DS
          </button>
          &nbsp;on electrical component assessement involving clustering,
          regression and survival analysis along with data simulation using GAN.
        </p>
        <p className="mv4">
          I&apos;m interested in combining my biology knowledge with my data
          science skills, especially in image anyalysis, machine learning and
          computer vision. I find great pleasure and satisfication in the
          scientific reasoning, problem solving, automation and efficiency of
          programming. I&apos;m thrilled to be part of the future of data-driven
          biological research.
        </p>
      </div>
    </Fragment>
  )
}

export default Bio
