/*
Extend Admin API V1 object
with admin users object
*/
ApiUmbrellaWeb.prototype.adminApi.v1.adminUsers = {
  /*
  Get a specific admin account given an ID
  return the JSON response object
  */
  getAdmin: function (id) {
    // Set up the urlPrefix
    var urlPrefix = ApiUmbrellaWeb.adminApi.v1.urlPrefixes.admins;

    // Set up request url with ID
    var url = apiUmbrellaWeb.baseUrl + this.urlPrefix + id;

    // Make GET request to API Umbrella
    var response = HTTP.get(url, {headers: this.headers});

    return response;
  },
  /*
  Create a new Admin user
  given a user object
  return the response object
  */
  createAdmin: function (userObject) {
    // Set up the urlPrefix
    var urlPrefix = ApiUmbrellaWeb.adminApi.v1.urlPrefixes.admins;

    // Create the URL
    var url = apiUmbrellaWeb.baseUrl + this.urlPrefix;

    // Create the options object
    var localOptions = {headers: this.headers};

    // Extend the Options object with the User object
    localOptions.data = userObject;

    // Make POST request to create new user
    var response = HTTP.post(url, localOptions);

    return response;
  },
  /*
  Get all admin users
  return the JSON response object
  */
  getAdmins: function () {
    // Set up the urlPrefix
    var urlPrefix = ApiUmbrellaWeb.adminApi.v1.urlPrefixes.admins;

    // Set up request url
    var url = apiUmbrellaWeb.baseUrl + this.urlPrefix;

    // Make GET request to API Umbrella
    var response = HTTP.get(url, {headers: this.headers});

    return response;
  }
};
