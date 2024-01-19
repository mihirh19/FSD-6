/* eslint-disable react/prop-types */

const Student = ({ name, sem }) => {
   return (
      <div className="student">
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

export default Student