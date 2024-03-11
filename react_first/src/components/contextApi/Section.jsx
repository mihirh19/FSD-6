import { useContext } from "react"
import { UsernameContext } from "../../App"

const Section = () => {
   const username = useContext(UsernameContext)
   return (
      <>
         <div>Section</div>
         <h1>{username}</h1>
      </>

   )
}

export default Section