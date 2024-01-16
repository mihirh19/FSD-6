import React from 'react'

const Student = ({ name, sem }) => {
   return (
      <div className='student'>
         {sem === 6 ? <h1 className='student-sem'>
            {sem}
         </h1> :
            <h1 className='student-sem' style={{ color: "red" }}>
               {sem}
            </h1>

         }

         <hr style={{ borderBottom: "2px solid black ", width: "100%" }} />
         <div>
            {name}
         </div>
      </div>



   )
}

export default Student