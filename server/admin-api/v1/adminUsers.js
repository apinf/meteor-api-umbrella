/*
API Admin User functions
*/
var adminUsers = {
  /*
  Get a specific admin account given an ID
  return the JSON response object
  */
  getAdmin: function (id) {
    // Set up request url with ID
    var url = apiUmbrellaWeb.baseUrl + "v1/admins/" + id;

    return apiUmbrellaWeb.getResponseObject(url);
  },
  /*
  Create a new Admin user
  given a user object
  return the response object
  */
  createAdmin: function (userObject) {
    // Create the URL
    var url = apiUmbrellaWeb.baseUrl + "v1/admins/";

    // Create the options object
    var options = {
      headers: apiUmbrellaWeb.requestHeaders,
      data: userObject
    };

    // Make POST request to create new user
    var response = HTTP.post(url, options);

    return response;
  },
  /*
  Get all admin users
  return the JSON response object
  */
  getAdmins: function () {
    // Set up request url
    var url = apiUmbrellaWeb.baseUrl + "v1/admins/";

    return apiUmbrellaWeb.getResponseObject(url);
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
