/*
API User functions
*/
var apiUsers = {
  /*
  Get a specific user given an ID
  return the JSON user object or error
  */
  getUser: function (id) {
    // Set up request url with ID
    var url = apiUmbrellaWeb.baseUrl + "v1/users/" + id;

    return apiUmbrellaWeb.getResponseObject(url);
  },
  /*
  Create a new API Umbrella user
  given a user object
  return the response object
  */
  createUser: function (userObject) {
    // Create the URL
    var url = apiUmbrellaWeb.baseUrl + "v1/users/";

    // Create the options object
    var options = {
      headers: apiUmbrellaWeb.requestHeaders,
      data: userObject
    };

    // Make POST request to create new user
    var response = HTTP.post(url, options);

    return response;
  },
  /*
  Get all users
  return the JSON response object
  */
  getUsers: function () {
    // Set up request url
    var url = apiUmbrellaWeb.baseUrl + "v1/users/";

    return apiUmbrellaWeb.getResponseObject(url);
  }
};

/*
Extend Admin API - V1
with apiUsers object
*/
apiUmbrellaWeb.adminApi.v1 = _.extend(
  apiUmbrellaWeb.adminApi.v1,
  { apiUsers: apiUsers }
);
