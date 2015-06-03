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
    var url = this.baseUrl + "v1/admins/" + id;

    return this.getResponseObject(url);
  },
  /*
  Get all admin users
  return the JSON response object
  */
  getAdmins: function () {
    // Set up request url
    var url = this.baseUrl + "v1/admins/";

    return this.getResponseObject(url);
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
