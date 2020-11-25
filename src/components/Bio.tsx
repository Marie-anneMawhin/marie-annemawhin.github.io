import React, { Fragment } from 'react'
import SectionHeader from './SectionHeader'
import { scrollToId } from '../utils/scrollToId'

const Bio: React.FC = () => {
  return (
    <Fragment>
      <SectionHeader title="Bio" />
      <div className="f5 f4-m f3-l fw2 ph3 tj">
        <p className="mv4">
          Hello, I&apos;m Marie-anne. I&apos;m a scientist with a background in
          cardiovascular immunology, and a passion for data science and machine
          learning.
        </p>
        <p className="mv4">
          I&apos;m currently working as a research associate in cardiorenal
          science, where I&apos;ve written several programs for image analysis
          to automate and improve my work.
        </p>
        <p className="mv4">
          I&apos;ve written Python scripts to clean and analyse a large medical
          dataset from a clinical trial. I&apos;ve also written scripts to
          analyse and visualise PCR results and plot evolutionary data.
        </p>
        <p className="mv4">
          I find great pleasure in the scientific reasoning, problem solving and
          the satisfication of automation and efficiency that progamming offers.
        </p>
        <p className="mv3">
          Thus far I&apos;m self-taught, and I am now trying to implement Deep
          Learning for my images.
        </p>
        <p className="mv4">
          I&apos;m keen to take my data science skills to the next level, and am
          excited to have been selected for the Data Science For All (DS4A) -
          Womens&apos; Summit, which I have now completed (
          <button
            onClick={() => scrollToId('ds4a')}
            className="link fw2 pa0 ba bw0 dark-blue bg-washed-blue pointer"
          >
            see my project below!
          </button>
          ). I&apos;m now taking part in the Science 2 Data Science (S2DS)
          programme.
        </p>
        <p className="mv4">
          I&apos;m interested in combining my biology knowledge with my data
          science skills, especially in image anyalysis, machine learning and
          computer vision. I&apos;m thrilled to be part of the future of
          data-driven biological research.
        </p>
      </div>
    </Fragment>
  )
}

export default Bio
