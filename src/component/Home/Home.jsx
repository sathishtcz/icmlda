import React from 'react'
import Homepage from '../../shared/components/Homepage/Homepage'
import HelmetComponent from '../HelmetComponent/HelmetComponent'

export default function Home() {
  return (
    <div>
      <HelmetComponent title={'Home - International Conference on Machine Learning and Data Analytics'} canonical={'https://icmlda.com/'} />
      <Homepage />
    </div>
  )
}
