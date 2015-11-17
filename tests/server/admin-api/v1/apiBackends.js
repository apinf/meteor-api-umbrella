/*
Tests for the API Backends v1 wrapper.
*/
// Tinytest.add(
//   "Admin API v1 - API Backends - getBackend",
//   function (test) {
//     //var response = apiUmbrellaWeb.adminApi.v1.apiUsers.getUsers();
//     //console.log(response.statusCode);
//     test.fail();
//   },
//   "Could not get all API Backends."
// );

Tinytest.add(
  "Admin API v1 - API Backends - getBackends",
  function (test) {
    var config = {
      apiKey: Meteor.settings.apiUmbrella.apiKey,
      authToken: Meteor.settings.apiUmbrella.authToken,
      baseUrl: Meteor.settings.apiUmbrella.baseUrl
    };
    var apiUmbrellaWeb = new ApiUmbrellaWeb(config);
    var response = apiUmbrellaWeb.adminApi.v1.apiBackends.getApiBackends();
    if (response.statusCode !== 200) {
      test.fail();
    }
  },
  "Could not get individual API Backend."
);
