import { Link } from "react-router-dom"

const Navbar = () => {
   return (
      <div style={{ display: 'flex', flexDirection: 'row' }}>
         <Link to='/' style={{ margin: "20px" }}>Home</Link>
         <Link to='/student' style={{ margin: "20px" }}>Student</Link>
         <Link to='/teacher' style={{ margin: "20px" }}>Teacher</Link>
         <Link to='/contact' style={{ margin: "20px" }} >Contact</Link>
      </div>
   )
}

export default Navbar