import { LOADING_JOBS, GET_JOBS, JOBS_ERROR } from "../types";

export const fetchJobs = (position, location) => {
    return async (dispatch) => {
      dispatch({
        type: LOADING_JOBS,
      });
    try {
      let response = await fetch(
        `https://jobs.github.com/positions.json?description=${position}&location=${location}`
      );
      if (response.ok) {
        const jobs = await response.json();
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
