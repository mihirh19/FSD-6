import { useContext } from "react";
import { DataContext } from "./UseReducerComponent";

const ContextData = () => {
   const { state } = useContext(DataContext);

   return (
      <h1>
         {state.apiData ? state.apiData.title : "Loading..."}
      </h1>
   )
}

export default ContextData