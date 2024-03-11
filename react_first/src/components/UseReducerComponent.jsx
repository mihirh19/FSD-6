/* eslint-disable react/prop-types */
import { createContext, useReducer, useEffect } from "react";

const initialState = {
   apiData: null,
};

const reducer = (state, action) => {
   switch (action.type) {
      case 'SET_API_DATA':
         return {
            ...state,
            apiData: action.payload,
         };
      default:
         return state;
   }
};

const DataContext = createContext();

export const DataProvider = ({ children }) => {
   const [state, dispatch] = useReducer(reducer, initialState);

   useEffect(() => {
      console.log('EffectComponent mounted');
      async function fetchData() {
         if (state.apiData === null) {
            const data = await fetch('https://jsonplaceholder.typicode.com/todos/1').then((response) => {
               return response.json();
            });
            dispatch({ type: 'SET_API_DATA', payload: data });
         }
      }

      fetchData();

      return () => {
         console.log('EffectComponent unmounted');
      };
   }, [state.apiData]);

   return (
      <DataContext.Provider value={{ state, dispatch }}>{children}</DataContext.Provider>
   );
};
