import React, { Fragment } from 'react'
import SectionHeader from './SectionHeader'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//@ts-ignore
import { Player } from 'video-react'

const items = [
  {
    name: "DS4A Women's Summit",
    date: 'Autumn 2020',
    description:
      'Data Science for All: Women’s Summit is a novel program designed to connect more young women with data science & analytics employers. The program includes five weeks of free training and mentorship, and exclusive recruiting opportunities with top firms.',
    link: 'https://www.correlation-one.com/ds4a',
    image:
      'https://marie-anne-mawhin-github-portfolio.s3.eu-west-2.amazonaws.com/ds4a-poster.png',
    altText: 'DS4A Poster',
    imageId: 'ds4a',
    video:
      'https://marie-anne-mawhin-github-portfolio.s3.eu-west-2.amazonaws.com/ds4a.mp4'
  },
  {
    name: 'S2DS',
    date: 'Winter 2020',
    description:
      'Europe’s largest data science training programme. Five weeks of intensive, project-based training turning exceptional analytical PhDs and MScs into Data Scientists.',
    link: 'http://www.s2ds.org/'
  }
]

const Projects: React.FC = () => {
  const projectItems = items.map(
    (
      { name, date, description, link, image, altText, imageId, video },
      index
    ) => (
      <div key={index} className="tc ph3">
        <p className="f4 f3-m f2-l fw2 black-90 mt4 mb1">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="link dark-blue"
          >
            <span>{name}</span>
            <span className="f7 v-mid pl2">
              <FontAwesomeIcon icon={['fas', 'external-link-alt']} />
            </span>
          </a>
          <span> - {date}</span>
        </p>
        <p className="f5 f4-m f3-l fw2 black-60 mt0 lh-copy">{description}</p>
        {image && (
          <img src={image} alt={altText} id={imageId} className="mb3" />
        )}
        {video && (
          <Player>
            <source src={video} type="video/mp4" />
          </Player>
        )}
      </div>
    )
  )
  return (
    <Fragment>
      <SectionHeader title="Projects" />
      {projectItems}
    </Fragment>
  )
}

export default Projects
