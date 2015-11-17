/*
Sample configuration for tests
*/
var config = {
  "api_umbrella": {
    "apiKey": "sample_api_key",
    "authToken": "sample_auth_token",
    "baseUrl": "https://api-umbrella.example.com",
  },
}

/*
Tests for the API Umbrella Admin API wrapper.
ensuring configuration options are available
*/
Tinytest.add(
  "config - ApiUmbrellaWeb",
  function (test) {
    if (!ApiUmbrellaWeb) {
      test.fail();
      }
  },
  "apiUmbrellaWeb object is not available."
);

Tinytest.add(
  "config - ApiUmbrellaWeb.baseUrl",
  function (test) {
    var apiUmbrellaWeb = new ApiUmbrellaWeb(config);
    var keys = _.keys(apiUmbrellaWeb);
    var apiUmbrellaWebContainsKey = _.contains(keys, 'baseUrl');
    if (!apiUmbrellaWebContainsKey) {
      test.fail("ApiUmbrellaWeb does not contain 'baseUrl' key.");
    }
  }
);

Tinytest.add(
  "config - ApiUmbrellaWeb.headers",
  function (test) {
    var apiUmbrellaWeb = new ApiUmbrellaWeb(config);
    var keys = _.keys(apiUmbrellaWeb);
    var apiUmbrellaWebContainsHeadersKey = _.contains(keys, 'headers');
    if (!apiUmbrellaWebContainsHeadersKey) {
      test.fail("ApiUmbrellaWeb does not contain 'headers' key.");
    }
  }
);

Tinytest.add(
  "config - ApiUmbrellaWeb.headers.Accept",
  function (test) {
    var apiUmbrellaWeb = new ApiUmbrellaWeb(config);
    var keys = _.keys(apiUmbrellaWeb.headers);
    var apiUmbrellaWebHeadersContainsAcceptKey = _.contains(keys, 'Accept');
    if (!apiUmbrellaWebHeadersContainsAcceptKey) {
      test.fail("ApiUmbrellaWeb.headers does not contain 'Accept' key.");
    }
  }
);

Tinytest.add(
  "config - ApiUmbrellaWeb.headers.Content-Type",
  function (test) {
    var apiUmbrellaWeb = new ApiUmbrellaWeb(config);
    var keys = _.keys(apiUmbrellaWeb.headers);
    var apiUmbrellaWebHeadersContainsContentTypeKey = _.contains(keys, 'Content-Type');
    if (!apiUmbrellaWebHeadersContainsContentTypeKey) {
      test.fail("ApiUmbrellaWeb.headers does not contain 'Content-Type' key.");
    }
  }
);

Tinytest.add(
  "config - ApiUmbrellaWeb.headers.X-Admin-Auth-Token",
  function (test) {
    var apiUmbrellaWeb = new ApiUmbrellaWeb(config);
    var keys = _.keys(apiUmbrellaWeb.headers);
    var apiUmbrellaWebHeadersContainsXAdminAuthTokenKey = _.contains(keys, 'X-Admin-Auth-Token');
    if (!apiUmbrellaWebHeadersContainsXAdminAuthTokenKey) {
      test.fail("ApiUmbrellaWeb.headers does not contain 'X-Admin-Auth-Token' key.");
    }
  }
);

Tinytest.add(
  "config - ApiUmbrellaWeb.headers.X-Api-Key",
  function (test) {
    var apiUmbrellaWeb = new ApiUmbrellaWeb(config);
    var keys = _.keys(apiUmbrellaWeb.headers);
    var apiUmbrellaWebHeadersContainsXApiKeyKey = _.contains(keys, 'X-Api-Key');
    if (!apiUmbrellaWebHeadersContainsXApiKeyKey) {
      test.fail("ApiUmbrellaWeb.headers does not contain 'X-Api-Key' key.");
    }
  }
);
