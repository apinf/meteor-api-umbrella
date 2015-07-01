/*
API Admin User functions
*/
var adminUsers = {
  urlPrefix: "v1/admins/",
  options: {
    headers: apiUmbrellaWeb.requestHeaders
  },
  /*
  Get a specific admin account given an ID
  return the JSON response object
  */
  getAdmin: function (id) {
    // Set up request url with ID
    var url = apiUmbrellaWeb.baseUrl + this.urlPrefix + id;

    // Make GET request to API Umbrella
    var response = HTTP.get(url, this.options);

    return response;
  },
  /*
  Create a new Admin user
  given a user object
  return the response object
  */
  createAdmin: function (userObject) {
    // Create the URL
    var url = apiUmbrellaWeb.baseUrl + this.urlPrefix;

    // Create the options object
    var localOptions = this.options;

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
    // Set up request url
    var url = apiUmbrellaWeb.baseUrl + this.urlPrefix;

    // Make GET request to API Umbrella
    var response = HTTP.get(url, this.options);

    return response;
  }
};

/*
Extend Admin API V1 object
with admin users object
*/
apiUmbrellaWeb.adminApi.v1 = _.extend(
  apiUmbrellaWeb.adminApi.v1,
  { adminUsers: adminUsers }
);
