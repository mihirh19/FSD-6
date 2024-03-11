import { LOAD } from "./actionTypes";

const loginReducer = (state = [], action) => {
   switch (action.type) {
      case LOAD:
         return action.payload.username;
      default:
         return state;
   }
};

export default loginReducer