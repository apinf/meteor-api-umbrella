/*
API User functions
*/
var apiUsers = {
  urlPrefix: "v1/users/",
  options: {
    headers: apiUmbrellaWeb.requestHeaders
  },
  /*
  Get a specific user given an ID
  return the JSON user object or error
  */
  getUser: function (id) {
    // Set up request url with ID
    var url = apiUmbrellaWeb.baseUrl + this.urlPrefix + id;

    // Make GET request to API Umbrella
    var response = HTTP.get(url, this.options);

    return response;
  },
  /*
  Create a new API Umbrella user
  given a user object
  return the response object
  */
  createUser: function (userObject) {
    // Create the URL
    var url = apiUmbrellaWeb.baseUrl + this.urlPrefix;

    // Create temporary options object
    var localOptions = this.options;

    // Extend the Options object with the User object
    localOptions.data = userObject;

    // Make POST request to create new user
    var response = HTTP.post(url, localOptions);

    return response;
  },
  /*
  Get all users
  return the JSON response object
  */
  getUsers: function () {
    // Set up request url
    var url = apiUmbrellaWeb.baseUrl + this.urlPrefix;

    // Make GET request to API Umbrella
    var response = HTTP.get(url, this.options);

    return response;
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
