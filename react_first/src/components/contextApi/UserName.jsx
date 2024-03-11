import { useContext } from "react"
import { UsernameContext } from "../../App"

const UserName = () => {
   const username = useContext(UsernameContext);

   return (
      <>
         <div>UserName</div>
         <h1>{username}</h1>
      </>


   )
}

export default UserName