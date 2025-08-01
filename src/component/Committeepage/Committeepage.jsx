import Organizingcommittee from "../../shared/components/Organizingcommittee/Organizingcommittee"
import HelmetComponent from "../HelmetComponent/HelmetComponent"

function Committeepage() {
  return (
    <div>
      <HelmetComponent title={'Organizing Committee - International Conference on Machine Learning and Data Analytics'} canonical={'https://icmlda.com/organizing-committee'} />
      <Organizingcommittee />
    </div>
  )
}

export default Committeepage