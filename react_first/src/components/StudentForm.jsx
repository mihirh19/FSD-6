import { useState } from "react"

const StudentForm = () => {
   const [studentInfo, setStudentInfo] = useState({
      studentName: "",
      studentRollNo: "",
      studentGender: "",
      selectsports: [],
      skills: []
   })

   const sports = [
      { id: 1, name: "cricket" },
      { id: 2, name: "football" },

   ]

   const handleChange = (e) => {
      console.log(e.target.type);

      if (e.target.type === 'radio') {
         setStudentInfo({ ...studentInfo, studentGender: e.target.value })
         return
      }
      if (e.target.type === 'checkbox') {
         const { value, checked } = e.target
         if (checked) {
            setStudentInfo({ ...studentInfo, skills: [...studentInfo.skills, value] })
         }
         else {
            setStudentInfo({ ...studentInfo, skills: studentInfo.skills.filter((skill) => skill !== value) })
         }
         return
      }


      const { name, value } = e.target
      setStudentInfo({ ...studentInfo, [name]: value })
   }


   const handleSelectChange = (e) => {
      const selectedOptions = Array.from(e.target.selectedOptions, option => option.value)
      setStudentInfo({ ...studentInfo, selectsports: selectedOptions })
   }


   const handleSubmit = (e) => {
      e.preventDefault()
      alert(studentInfo.studentName)
   }
   return (
      <div>
         <h1>Student Form</h1>

         <form onSubmit={handleSubmit}>
            <div style={{ display: 'flex', flexDirection: "column" }}>
               <div style={{ display: "flex", flexDirection: "row" }}>
                  <h2 style={{ marginRight: "15px" }}>Student Name</h2>
                  <input type="text" placeholder="Enter student name" id="studentName" name="studentName" value={studentInfo.studentName}
                     onChange={handleChange}
                  />
               </div>
               <div style={{ display: "flex", flexDirection: "row" }}>
                  <h2 style={{ marginRight: "15px" }}>Student RollNo</h2>
                  <input type="text" placeholder="Enter student rollno" id="studentRollNo" name="studentRollNo" value={studentInfo.studentRollNo}
                     onChange={handleChange}
                  />
               </div>
               <div style={{ display: "flex", flexDirection: "row" }}>
                  <h2 style={{ marginRight: "15px" }}>Gender </h2>
                  <input type="radio" placeholder="Enter student gender" id="male" name="male" value={"male"} checked={studentInfo.studentGender === "male"} onChange={handleChange} />
                  <label htmlFor="male">male</label>
                  <input type="radio" placeholder="Enter student gender" id="male" name="male" value={"female"} checked={studentInfo.studentGender === "female"} onChange={handleChange} />
                  <label htmlFor="female">female</label>
               </div>
               <div style={{ display: "flex", flexDirection: "row" }}>
                  <h2 style={{ marginRight: "15px" }}>Skills </h2>
                  <input type="checkbox" placeholder="Enter student skills" id="cpp" name="cpp" value={"cpp"} onChange={handleChange} />
                  <label htmlFor="cpp">cpp</label>
                  <input type="checkbox" placeholder="Enter student skills" id="java" name="java" value={"java"} onChange={handleChange} />
                  <label htmlFor="java">java</label>

               </div>
               <div style={{ display: "flex", flexDirection: "row" }}>
                  <h2 style={{ marginRight: "15px" }}>Sports </h2>

                  <select name="selectsports" id="selectsports" onChange={handleSelectChange} multiple>
                     {sports.map((sport) => {
                        return <option key={sport.id} value={sport.name}>{sport.name}</option>
                     })}
                  </select>

               </div>
            </div>



            <button type="submit">Submit</button>
         </form>



         <h3>
            Info
         </h3>

         <h4>Name  : {studentInfo.studentName}</h4>
         <h4>Roll No : {studentInfo.studentRollNo} </h4>
         <h4>Gender : {studentInfo.studentGender}</h4>
         <h4>Skills :  {studentInfo.skills.join('   ')}</h4>
         <h4>Sports : {studentInfo.selectsports.join("    ")}</h4>
      </div>
   )
}

export default StudentForm