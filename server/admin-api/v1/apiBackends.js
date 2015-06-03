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
