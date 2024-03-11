import Body from "./Body"
import Header from "./Header"

const Page = () => {
   return (
      <div style={{ display: "flex", flexDirection: "row", backgroundColor: "blue" }}>
         <Header />
         <Body />
      </div>

   )
}

export default Page