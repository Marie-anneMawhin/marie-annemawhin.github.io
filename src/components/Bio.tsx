import React, { Fragment } from 'react'
import SectionHeader from './SectionHeader'

const Bio: React.FC = () => {
  return (
    <Fragment>
      <SectionHeader title="Bio" />
      <div className="f5 f4-m f3-l fw2 ">
        <p className="ph3 mv3">
          Hey, I&apos;m Marie-anne. I&apos;m a biologist specialised in
          cardiovascular immunology, and data avid scientist.
        </p>
        <p className="ph3 mv3">
          During my previous and current experience, I wrote several programs
          for image analysis in python.
        </p>
        <p className="ph3 mv3">
          I also wrote codes to analyse a large medical dataset from a clinical
          trial and to analyse and visualise PCR results.
        </p>
        <p className="ph3 mv3">
          I found in coding the pleasure of scientific reasoning, the challenge
          of problem solving and the joy of automation and efficiency.
        </p>
        <p className="ph3 mv3">
          I have thus self-taught myself python and I am now trying to implement
          Deep Learning for my images.
        </p>
      </div>
    </Fragment>
  )
}

export default Bio
