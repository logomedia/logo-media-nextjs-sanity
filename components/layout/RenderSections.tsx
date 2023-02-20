import PropTypes from 'prop-types'
import React, { Fragment } from 'react'

import capitalizeString from '../../utils/capitalizeString'
import * as SectionComponents from '../sections'

function resolveSections(section) {
  // eslint-disable-next-line import/namespace

  const Section = SectionComponents[capitalizeString(section._type)]

  if (Section) {
    return Section
  }

  console.error('Cant find section', section) // eslint-disable-line no-console
  return null
}

function RenderSections(props) {
  const { sections, projects, posts } = props

  if (!sections) {
    console.error('Missing section')
    return <div>Missing sections</div>
  }

  return (
    <Fragment>
      {sections.map((section) => {
        const SectionComponent = resolveSections(section)
        if (!SectionComponent) {
          return <div key={key}>Missing section {section._type}</div>
        }
        return (
          <SectionComponent
            {...section}
            key={section._key}
            projects={projects}
            posts={posts}
          />
        )
      })}
    </Fragment>
  )
}

RenderSections.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      _type: PropTypes.string,
      _key: PropTypes.string,
      section: PropTypes.instanceOf(PropTypes.object),
    })
  ),
}

export default RenderSections
