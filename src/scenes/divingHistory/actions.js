import { USER_FETCH_DATA_ASYNC } from "src/actions/actionTypes";

const userFetchDataAsync = userId => {
  if (typeof userId === "undefined")
    throw new Error("User Id is mandatory to fetching dive data");

  return {
    type: USER_FETCH_DATA_ASYNC,
    payload: {
      userId,
      section: ""
    }
  };
};

export default userFetchDataAsync;
