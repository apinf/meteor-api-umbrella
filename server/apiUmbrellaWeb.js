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
  }
};
