/*
Extend Admin API - V1
with apiBackends object
*/
ApiUmbrellaWeb.prototype.adminApi.v1.apiBackends = {
  /*
  Get a specific API backend given an ID
  return the JSON response object
  */
  getApiBackend: function (id) {
    // Set up the urlPrefix
    var urlPrefix = ApiUmbrellaWeb.adminApi.v1.urlPrefixes.apis;

    // Set up request url with ID
    var url = apiUmbrellaWeb.baseUrl + this.urlPrefix + id;

    // Make GET request to API Umbrella
    var response = HTTP.get(url, {headers: this.headers});

    return response;
  },
  /*
  Create a new API Backend
  given a backend object
  return the response object
  */
  createApiBackend: function (backendObject) {
    // Set up the urlPrefix
    var urlPrefix = ApiUmbrellaWeb.adminApi.v1.urlPrefixes.apis;

    // Create the URL
    var url = apiUmbrellaWeb.baseUrl + this.urlPrefix;

    // Create temporary options object
    var localOptions = {headers: this.headers};

    // Extend the Options object with the Backend object
    localOptions.data = backendObject;

    // Make POST request to create new backend
    var response = HTTP.post(url, localOptions);

    return response;
  },
  /*
  Get all API backends
  return the JSON response object
  */
  getApiBackends: function () {
    // Set up the urlPrefix
    var urlPrefix = ApiUmbrellaWeb.adminApi.v1.urlPrefixes.apis;

    // Set up request url
    var url = apiUmbrellaWeb.baseUrl + this.urlPrefix;

    // Make GET request to API Umbrella
    var response = HTTP.get(url, {headers: this.headers});

    return response;
  }
};
