/*
API Backend functions
*/
var apiBackends = {
  /*
  Get a specific API backend given an ID
  return the JSON response object
  */
  getApiBackend: function (id) {
    // Set up request url with ID
    var url = this.baseUrl + "v1/apis/" + id;

    return this.getResponseObject(url);
  },
  /*
  Create a new API Backend
  given a backend object
  return the response object
  */
  createApiBackend: function (backendObject) {
    // Create the URL
    var url = apiUmbrellaWeb.baseUrl + "v1/apis/";

    // Create the options object
    var options = {
      headers: apiUmbrellaWeb.requestHeaders,
      data: backendObject
    };

    // Make POST request to create new user
    var response = HTTP.post(url, options);

    return response;
  },
  /*
  Get all API backends
  return the JSON response object
  */
  getApiBackends: function () {
    // Set up request url
    var url = this.baseUrl + "v1/apis/";

    return this.getResponseObject(url);
  }
};

/*
Extend Admin API - V1
with apiBackends object
*/
apiUmbrellaWeb.adminApi.v1 = _.extend(
  apiUmbrellaWeb.adminApi.v1,
  { apiBackends: apiBackends }
);
