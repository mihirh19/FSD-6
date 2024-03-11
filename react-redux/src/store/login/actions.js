import { LOAD } from "./actionTypes";

export const load = (username) => ({
   type: LOAD,
   payload: { username }
})
