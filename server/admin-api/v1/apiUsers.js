/*
Extend Admin API - V1
with apiUsers object
*/
ApiUmbrellaWeb.prototype.adminApi.v1.apiUsers = {
  /*
  Get a specific user given an ID
  return the JSON user object or error
  */
  getUser: function (id) {
    // Set up the urlPrefix
    var urlPrefix = ApiUmbrellaWeb.adminApi.v1.urlPrefixes.users;

    // Set up request url with ID
    var url = this.baseUrl + urlPrefix + id;

    // Make GET request to API Umbrella
    var response = HTTP.get(url, {headers: this.headers});

    return response;
  },
  /*
  Create a new API Umbrella user
  given a user object
  return the response object
  */
  createUser: function (userObject) {
    // Set up the urlPrefix
    var urlPrefix = ApiUmbrellaWeb.adminApi.v1.urlPrefixes.users;

    // Create the URL
    var url = apiUmbrellaWeb.baseUrl + urlPrefix;

    // Create temporary options object
    var localOptions = {headers: this.headers};

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
    // Set up the urlPrefix
    var urlPrefix = ApiUmbrellaWeb.adminApi.v1.urlPrefixes.users;

    // Set up request url
    var url = apiUmbrellaWeb.baseUrl + urlPrefix;

    // Make GET request to API Umbrella
    var response = HTTP.get(url, {headers: this.headers});

    return response;
  }
};
