/*
Define an object to interact with API Umbrella Admin API
Documentation site: http://apiumbrella.io/docs/admin-api/
*/
apiUmbrellaWeb = {
  "baseUrl": Meteor.settings.api_umbrella.base_url,
  "requestHeaders": {
    "X-Api-Key": Meteor.settings.api_umbrella.api_key,
    "X-Admin-Auth-Token": Meteor.settings.api_umbrella.auth_token,
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  /*
  Get a response object from server
  given a request URL
  return response object
  */
  getResponseObject: function (url) {
    try {
      var response = HTTP.get(url, {
        headers: this.requestHeaders
      });
    } catch (error) {
      return error;
    }

    // If successful, return the response object
    return response;
  },
  /*
  Get a specific user given an ID
  return the JSON user object or error
  */
  getUser: function (id) {
    // Set up request url with ID
    var url = this.baseUrl + "users/" + id;

    return this.getResponseObject(url);
  },
  /*
  Create a new API Umbrella user
  given a user object
  return the response object
  */
  createUser: function (userObject) {
    // Create the URL
    var url = this.baseUrl + "users/";

    // Create the options object
    var options = {
      headers: this.requestHeaders,
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
    var url = this.baseUrl + "users/";

    return this.getResponseObject(url);
  },
  /*
  Get a specific API backend given an ID
  return the JSON response object
  */
  getApiBackend: function (id) {
    // Set up request url with ID
    var url = this.baseUrl + "apis/" + id;

    return this.getResponseObject(url);
  },
  /*
  Get all API backends
  return the JSON response object
  */
  getApiBackends: function () {
    // Set up request url
    var url = this.baseUrl + "apis/";

    return this.getResponseObject(url);
  },
  /*
  Get a specific admin account given an ID
  return the JSON response object
  */
  getAdmin: function (id) {
    // Set up request url with ID
    var url = this.baseUrl + "admins/" + id;

    return this.getResponseObject(url);
  },
  /*
  Get all admin users
  return the JSON response object
  */
  getAdmins: function () {
    // Set up request url
    var url = this.baseUrl + "admins/";

    return this.getResponseObject(url);
  }
};
