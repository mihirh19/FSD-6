/* eslint-disable react-refresh/only-export-components */
import React from 'react'
import { fetchData } from '../store/data/actions'
import { useEffect } from 'react'
import { connect } from 'react-redux'
const Lists = ({ fetchData, data, loading, error }) => {

   const [url, setUrl] = React.useState("")
   console.log(data);

   return (

      <div>

         <input type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
         />
         <button onClick={() => {
            fetchData(url)
         }}>
            Submit
         </button>


         <textarea name="data" id="data" cols="100" rows="10" value={JSON.stringify(data.data)}>
         </textarea>
      </div>


   )
}
const mapStateToProps = state => ({
   data: state.data,
   loading: state.loading,
   error: state.error,
});

const mapDispatchToProps = {
   fetchData,
};


export default connect(mapStateToProps, mapDispatchToProps)(Lists);