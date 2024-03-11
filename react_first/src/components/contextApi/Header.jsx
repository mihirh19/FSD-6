import Logo from "./Logo"
import UserName from "./UserName"

const Header = () => {
   return (
      <div style={{ display: "flex", flexDirection: "column" }}>
         <div>Header</div>
         <Logo />
         <UserName />
      </div>

   )
}

export default Header