import React from 'react'
import Scope from '../../shared/components/Scope/Scope'
import HelmetComponent from '../HelmetComponent/HelmetComponent'

export default function Scopepage() {
  return (
    <div>
      <HelmetComponent title={'Scope of Conference - International Conference on Machine Learning and Data Analytics'} canonical={'https://icmlda.com/scope'} />
      <Scope />
    </div>
  )
}
