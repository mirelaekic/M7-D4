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
        `/positions.json?description=${position}&location=${location}`,
      );
      console.log(response,"the rsponse")
      if (response.ok) {
        const jobs = await response.json();
        console.log(jobs,"the jobs")
        if(jobs.length === 0) {
            dispatch({
                type: JOBS_ERROR,
              })
        }
        dispatch({
          type: GET_JOBS,
          payload: jobs,
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
