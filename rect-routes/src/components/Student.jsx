import Stu from "./Stu"
import stu from "../data/students.json"
const Student = () => {
   return (
      <div className='studentcomp'>
         {stu.map((s) => {
            return <Stu key={s.id} {...s} />
         })}
      </div>
   )
}

export default Student