/*
Tests for the API Umbrella Admin API wrapper.
ensuring configuration options are available
*/
Tinytest.add(
  "config - apiUmbrellaWeb",
  function (test) {
    if (!apiUmbrellaWeb) {
      test.fail();
      }
  },
  "apiUmbrellaWeb object is not available."
);

Tinytest.add(
  "config - apiUmbrellaWeb.baseUrl",
  function (test) {
    var keys = _.keys(apiUmbrellaWeb);
    var apiUmbrellaWebContainsKey = _.contains(keys, 'baseUrl');
    if (!apiUmbrellaWebContainsKey) {
      test.fail("apiUmbrellaWeb does not contain 'baseUrl' key.");
    }
  }
);

Tinytest.add(
  "config - apiUmbrellaWeb.requestHeaders",
  function (test) {
    var keys = _.keys(apiUmbrellaWeb);
    var apiUmbrellaWebContainsKey = _.contains(keys, 'requestHeaders');
    if (!apiUmbrellaWebContainsKey) {
      test.fail("apiUmbrellaWeb does not contain 'requestHeaders' key.");
    }
  }
);

Tinytest.add(
  "config - apiUmbrellaWeb.requestHeaders.Accept",
  function (test) {
    var keys = _.keys(apiUmbrellaWeb.requestHeaders);
    var apiUmbrellaWebContainsKey = _.contains(keys, 'Accept');
    if (!apiUmbrellaWebContainsKey) {
      test.fail("apiUmbrellaWeb.requestHeaders does not contain 'Accept' key.");
    }
  }
);

Tinytest.add(
  "config - apiUmbrellaWeb.requestHeaders.X-Api-Key",
  function (test) {
    var keys = _.keys(apiUmbrellaWeb.requestHeaders);
    var apiUmbrellaWebContainsKey = _.contains(keys, 'X-Api-Key');
    if (!apiUmbrellaWebContainsKey) {
      test.fail("apiUmbrellaWeb.requestHeaders does not contain 'X-Api-Key' key.");
    }
  }
);

Tinytest.add(
  "config - apiUmbrellaWeb.requestHeaders.X-Admin-Auth-Token",
  function (test) {
    var keys = _.keys(apiUmbrellaWeb.requestHeaders);
    var apiUmbrellaWebContainsKey = _.contains(keys, 'X-Admin-Auth-Token');
    if (!apiUmbrellaWebContainsKey) {
      test.fail("apiUmbrellaWeb.requestHeaders does not contain 'X-Admin-Auth-Token' key.");
    }
  }
);
