/*
Define an object to interact with API Umbrella Admin API
Documentation site: http://apiumbrella.io/docs/admin-api/
*/
apiUmbrellaWeb = {
  "baseUrl": Meteor.settings.apiUmbrella.base_url,
  "requestHeaders": {
    "X-Api-Key": Meteor.settings.apiUmbrella.api_key,
    "X-Admin-Auth-Token": Meteor.settings.apiUmbrella.auth_token,
  },
  getUser: function (userId) {
    /*
    Get a specific user from API Umbrella Admin API
    return the JSON user object or error
    */
    try {
      var response = HTTP.get(baseUrl, {
        headers: requestHeaders,
        params: {
          "id": userId
        }
      });
    } catch (error) {
      return error;
    }

    // If successful, return the response object
    return response;
  },
  getUsers: function () {
    /*
    Get all users from API Umbrella Admin API
    return the JSON user object or error
    */
    try {
      var response = HTTP.get(baseUrl, {
        headers: requestHeaders,
      });
    } catch (error) {
      return error;
    }

    // If successful, return the response object
    return response;
  }
};
