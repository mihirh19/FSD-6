import { useNavigate } from 'react-router-dom'
// eslint-disable-next-line react/prop-types
const Stu = ({ id, name, sem }) => {
   const navigate = useNavigate();
   return (
      <div className="student" onClick={() => {
         navigate(`/student/${id}`)
      }}>
         <h1 className={`student-sem-${sem}`}>
            {sem}
         </h1>

         <hr style={{ borderBottom: "2px solid black ", width: "100%" }} />
         <div>
            {name}
         </div>
      </div>
   )
}

export default Stu