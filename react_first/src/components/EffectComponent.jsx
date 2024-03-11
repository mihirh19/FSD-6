import { useState } from "react";
import { useEffect } from "react"

const EffectComponent = () => {
   const [apiData, setApiData] = useState(null)

   console.log('EffectComponent rendered');

   useEffect(() => {
      console.log('EffectComponent mounted')
      async function fetchData() {
         if (apiData === null) {
            const data = await fetch("https://jsonplaceholder.typicode.com/todos/1").then((response) => {
               return response.json()

            })

            setApiData(data)
         }
      }

      fetchData()

      return () => {
         console.log('EffectComponent unmounted')
      }
   }, [apiData])
   return (
      <h1>
         {apiData ? apiData.title : 'Loading...'}
      </h1>
   )
}

export default EffectComponent