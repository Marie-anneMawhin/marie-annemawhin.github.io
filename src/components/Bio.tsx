import React, { Fragment } from 'react'

import SectionHeader from './SectionHeader'
import { scrollToId } from '../utils/scrollToId'

const Bio: React.FC = () => {
  return (
    <Fragment>
      <SectionHeader title="Bio" />
      <div className="f5 f4-m f3-l fw3 ph3 tj">
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
            className="link fw3 pa0 ba bw0 blue bg-washed-blue pointer"
          >
            DS4A
          </button>
          &nbsp;on vaccine response prediction with classification, and&nbsp;
          <button
            onClick={() => scrollToId('s2ds')}
            className="link fw3 pa0 ba bw0 blue bg-washed-blue pointer"
          >
            S2DS
          </button>
          &nbsp;on electrical component assessement involving clustering,
          regression and survival analysis along with data simulation using GAN.
        </p>
        <p className="mv3">
          I&apos;m interested in combining my biology knowledge with my data
          science skills, especially in image anyalysis, machine learning and
          computer vision. I find great pleasure in the scientific reasoning,
          problem solving and the satisfication of automation and efficiency
          that progamming offers. I&apos;m thrilled to be part of the future of
          data-driven biological research.
        </p>
      </div>
    </Fragment>
  )
}

export default Bio
