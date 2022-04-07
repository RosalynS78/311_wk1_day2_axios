// import axios here
const axios = require("axios");
// Please note that it is normally not considered best practice to commit
// api keys to github as it presents a security risk. It is done here only
// for practice purposes as we are sharing the same account
const api_key = "d771b19ef336ed8381def3a60b574464";

const discoverMovie = () => {
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}`;
  // code here
  return (
    axios
      .get(url)
      // * The initial call will be made by typing `axios(url)`
      .then(function (response) {
        // * Axios is a promise (like fetch) so use the `.then` function to log the result
        return response;
        // * When complete, go back and simply `return` the original axios call to make the test pass
      })
  );
};

const getMovieById = (id) => {
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}`;
  // code here
  return (
    axios
      .get(url)
      // * We will return the result similar to the last function but this time append `.then` and just return `result.data`
      .then(function (response) {
        return response;
      })
      .then(function (result) {
        return result.data;
      })
  );
};

const getMovieByIdFailure = () => {
  const fakeId = 5783; // FAKE ID HERE
  const url = `https://api.themoviedb.org/3/movie/${fakeId}?api_key=${api_key}`;
  // code here
  return (
    axios
      .get(url)
      // * This call is designed to fail because the movie id 5783 doesn't exist. When axios encounters a status code above 301 it automatically throws an error so in this function we will need `then` AND `catch` statements
      .catch(function (error) {
        // if (error.response) {
        // * Then use the `.catch` statement which always starts with the parameter `error`. Return the `status` of the `response` of the `error` (error.response.status)
        return error.response.status;
        //}
      })
  );
};

module.exports = {
  discoverMovie,
  getMovieById,
  getMovieByIdFailure,
};
