import React from 'react'
import Contactus from '../../shared/components/Contactus/Contactus'
import HelmetComponent from '../HelmetComponent/HelmetComponent'

export default function Contactpage() {
  return (
    <div>
      <HelmetComponent title={'Contact us - International Conference on Machine Learning and Data Analytics'} canonical={'https://icmlda.com/contactus'} />
      <Contactus />
    </div>
  )
}
