import React from 'react'
import Keydates from '../../shared/components/Keydates/Keydates'
import HelmetComponent from '../HelmetComponent/HelmetComponent'

export default function Keydatepage() {
  return (
    <div>
      <HelmetComponent title={'Key Dates - International Conference on Machine Learning and Data Analytics'} canonical={'https://icmlda.com/key-dates'} />
      <Keydates />
    </div>
  )
}
