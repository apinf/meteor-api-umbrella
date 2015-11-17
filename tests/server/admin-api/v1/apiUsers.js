/*
Tests for the API Users v1 wrapper.
*/
// Tinytest.add(
//   "Admin API v1 - API Users - getUser",
//   function (test) {
//     test.fail();
//   },
//   "Could not get individual user."
// );

Tinytest.add(
  "Admin API v1 - API Users - getUsers",
  function (test) {
    var config = {
      apiKey: Meteor.settings.apiUmbrella.apiKey,
      authToken: Meteor.settings.apiUmbrella.authToken,
      baseUrl: Meteor.settings.apiUmbrella.baseUrl
    };
    var apiUmbrellaWeb = new ApiUmbrellaWeb(config);
    var response = apiUmbrellaWeb.adminApi.v1.apiUsers.getUsers();
    if (response.statusCode !== 200) {
      test.fail();
    }
  },
  "Could not get all users."
);

// Tinytest.add(
//   "Admin API v1 - API Users - createUser",
//   function (test) {
//     test.fail();
//   },
//   "Could not create user."
// );
