/*
API Backend functions
*/
var apiBackends = {
  urlPrefix: "v1/apis/",
  options: {
    headers: apiUmbrellaWeb.requestHeaders
  },
  /*
  Get a specific API backend given an ID
  return the JSON response object
  */
  getApiBackend: function (id) {
    // Set up request url with ID
    var url = apiUmbrellaWeb.baseUrl + this.urlPrefix + id;

    // Make GET request to API Umbrella
    var response = HTTP.get(url, this.options);

    return response;
  },
  /*
  Create a new API Backend
  given a backend object
  return the response object
  */
  createApiBackend: function (backendObject) {
    // Create the URL
    var url = apiUmbrellaWeb.baseUrl + this.urlPrefix;

    // Create temporary options object
    var localOptions = this.options;

    // Extend the Options object with the Backend object
    localOptions.data = backendObject;

    // Make POST request to create new user
    var response = HTTP.post(url, localOptions);

    return response;
  },
  /*
  Get all API backends
  return the JSON response object
  */
  getApiBackends: function () {
    // Set up request url
    var url = apiUmbrellaWeb.baseUrl + this.urlPrefix;

    // Make GET request to API Umbrella
    var response = HTTP.get(url, this.options);

    return response;
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
