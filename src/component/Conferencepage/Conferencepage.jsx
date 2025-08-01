import React from 'react'
import ConferenceTracks from '../../shared/components/ConferenceTracks/ConferenceTracks'
import HelmetComponent from '../HelmetComponent/HelmetComponent'

export default function Conferencepage() {
  return (
    <div>
      <HelmetComponent title={'Conference Tracks - International Conference on Machine Learning and Data Analytics'} canonical={'https://icmlda.com/conference-tracks'} />
      <ConferenceTracks />
    </div>
  )
}
