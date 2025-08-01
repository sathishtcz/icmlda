import React from 'react'
import Aboutus from '../../shared/components/About/Aboutus'
import HelmetComponent from '../HelmetComponent/HelmetComponent'

export default function Aboutpage() {
  return (
    <div>
      <HelmetComponent title={'About us - International Conference on Machine Learning and Data Analytics'} canonical={'https://icmlda.com/about'} />
      <Aboutus />
    </div>
  )
}
