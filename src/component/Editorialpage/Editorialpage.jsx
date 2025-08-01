import React from 'react'
import Editorboard from '../../shared/components/Editorboard/Editorboard'
import HelmetComponent from '../HelmetComponent/HelmetComponent'

export default function Editorialpage() {
  return (
    <div>
      <HelmetComponent title={'Editorial Board - International Conference on Machine Learning and Data Analytics'} canonical={'https://icmlda.com/editorial-board'} />
      <Editorboard />
    </div>
  )
}
