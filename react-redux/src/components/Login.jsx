/* eslint-disable react/prop-types */
import { load } from "../store/login/actions";
import { connect } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
const Login = ({ loggedInUsers, load }) => {
   const [loding, setLoding] = useState(false)

   useEffect(() => {
      async function fetchdata() {
         setLoding(true)
         const data = await fetch('https://jsonplaceholder.typicode.com/todos/')
            .then(response => response.json())

         load(data)
         setLoding(false)
      }
      fetchdata()
   }, [])




   return (
      <div>

         <div>
            <ul>
               {loding && <div>loading...</div>}

               {loggedInUsers.map((user, index) => (
                  <li key={index}>
                     <div>{user.title}</div>
                  </li>

               ))}
            </ul>
         </div>
      </div>
   )
}

const mapStateToProps = (state) => ({
   loggedInUsers: state.loggedInUsers
})

const mapDispatchProps = (dispatch) => ({
   load: (user) => dispatch(load(user)),
})

export default connect(mapStateToProps, mapDispatchProps)(Login);