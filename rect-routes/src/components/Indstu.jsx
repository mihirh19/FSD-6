import { useParams } from "react-router-dom"
import stu from '../data/students.json'


const Indstu = () => {
   const { id } = useParams()
   const student = stu.filter((u) => u.id === parseInt(id))[0]
   return (
      <div style={{ display: "flex", flexDirection: "column" }}>
         <h1>
            Student Name : {student.name}
         </h1>

         <h1>
            Sem : {student.sem}
         </h1>

         <h1>
            Email : {student.email}
         </h1>
         <h1>
            city : {student.city}
         </h1>

      </div>
   )
}

export default Indstu