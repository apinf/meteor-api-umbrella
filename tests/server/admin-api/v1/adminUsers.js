/*
Tests for the Admin Users v1 wrapper.
*/
// Tinytest.add(
//   "Admin API v1 - Admin Users - getAdmin",
//   function (test) {
//     //var response = apiUmbrellaWeb.adminApi.v1.apiUsers.getUsers();
//     //console.log(response.statusCode);
//     test.fail();
//   },
//   "Could not get all users."
// );

Tinytest.add(
  "Admin API v1 - Admin Users - getAdmins",
  function (test) {
    var config = {
      apiKey: Meteor.settings.apiUmbrella.apiKey,
      authToken: Meteor.settings.apiUmbrella.authToken,
      baseUrl: Meteor.settings.apiUmbrella.baseUrl
    };
    var apiUmbrellaWeb = new ApiUmbrellaWeb(config);
    var response = apiUmbrellaWeb.adminApi.v1.adminUsers.getAdmins();
    if (response.statusCode !== 200) {
      test.fail();
    }
  },
  "Could not get individual user."
);
