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
  return response or error
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
  Get a specific user from API Umbrella Admin API
  given a User ID
  return the JSON user object or error
  */
  getUser: function (userId) {
    // Set up base url with user ID
    var url = this.baseUrl + "users/" + userId;

    return this.getResponseObject(url);
  },
  /*
  Get all users from API Umbrella Admin API
  return the JSON user object or error
  */
  getUsers: function () {
    // Set up base url for users
    var url = this.baseUrl + "users/";

    return this.getResponseObject(url);
  },
  /*
  Get a specific user from API Umbrella Admin API
  given a User ID
  return the JSON user object or error
  */
  getApiBackend: function (apiBackendId) {
    // Set up base url with API Backend ID
    var url = this.baseUrl + "apis/" + apiBackendId;

    return this.getResponseObject(url);
  },
  /*
  Get all users from API Umbrella Admin API
  return the JSON user object or error
  */
  getApiBackends: function () {
    // Set up base url for users
    var url = this.baseUrl + "apis/";

    return this.getResponseObject(url);
  }
};
