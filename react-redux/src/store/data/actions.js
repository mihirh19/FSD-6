// actions.js
export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

export const fetchDataRequest = () => ({
   type: FETCH_DATA_REQUEST,
});

export const fetchDataSuccess = (data) => ({
   type: FETCH_DATA_SUCCESS,
   payload: data,
});

export const fetchDataFailure = (error) => ({
   type: FETCH_DATA_FAILURE,
   payload: error,
});

export const fetchData = (url) => {
   return (dispatch) => {
      dispatch(fetchDataRequest());
      fetch(url)
         .then(response => response.json())
         .then(data => {
            dispatch(fetchDataSuccess(data));
         })
         .catch(error => {
            dispatch(fetchDataFailure(error.message));
         });
   };
};
