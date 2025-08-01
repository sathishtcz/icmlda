import React from 'react'
import PaperSub from '../../shared/components/PaperSub/PaperSub'
import HelmetComponent from '../HelmetComponent/HelmetComponent'

export default function Papersubpage() {
  return (
    <div>
      <HelmetComponent title={'Paper Submission - International Conference on Machine Learning and Data Analytics'} canonical={'https://icmlda.com/paper-submission'} />
      <PaperSub />
    </div>
  )
}
