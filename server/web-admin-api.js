/*
Define an object to interact with API Umbrella Admin API
Documentation site: http://apiumbrella.io/docs/admin-api/
*/
apiUmbrellaWeb = {
  "baseUrl": Meteor.settings.api_umbrella.base_url,
  "requestHeaders": {
    "X-Api-Key": Meteor.settings.api_umbrella.api_key,
    "X-Admin-Auth-Token": Meteor.settings.api_umbrella.auth_token,
  },
  /*
  Get a specific user from API Umbrella Admin API
  given a User ID
  return the JSON user object or error
  */
  getUser: function (userId) {
    // Set up base url with user ID
    var url = this.baseUrl + "users/" + userId;

    // Try to get the user object from server
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
  Get all users from API Umbrella Admin API
  return the JSON user object or error
  */
  getUsers: function () {
    // Set up base url for users
    var url = this.baseUrl + "users/";

    // Try to get all users from server
    try {
      var response = HTTP.get(url, {
        headers: this.requestHeaders,
      });
    } catch (error) {
      return error;
    }

    // If successful, return the response object
    return response;
  }
};
