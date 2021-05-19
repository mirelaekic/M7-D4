import { LOADING_JOBS, GET_JOBS, JOBS_ERROR } from "../types";

export const fetchJobs = (position, location) => {
    return async (dispatch) => {
      dispatch({
        type: LOADING_JOBS,
      });
      //https://cors-anywhere.herokuapp.com/https://jobs.github.com
    try {
      
      console.log(position,location,"POSITION AND LOCATION")
      let response = await fetch(
        `https://api.allorigins.win/get?url=${encodeURIComponent(`https://jobs.github.com/positions.json?description=${position}&location=${location}`)}`,
      );
      if (response.ok) {
        const jobs = await response.json();
        let obj = JSON.parse(jobs.contents)
        if(obj.length === 0) {
            dispatch({
                type: JOBS_ERROR,
              })
        }
        dispatch({
          type: GET_JOBS,
          payload: obj,
        });
      }
    } catch (error) {
      console.log(error);
      dispatch({
        type: JOBS_ERROR,
      });
    }
  };
};
