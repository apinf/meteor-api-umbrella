Package.describe({
  name: "apinf:api-umbrella",
  summary: "Wrapper for API Umbrella Admin API.",
  version: "1.4.1",
  git: "https://github.com/apinf/meteor-api-umbrella.git"
});

Package.onUse(function(api) {
  api.versionsFrom("METEOR@1.0");
  api.use(["http", "underscore"]);
  api.imply(["http", "underscore"]);

  api.addFiles("server/apiUmbrellaWeb.js", ["server"]);
  api.addFiles("server/apiUmbrellaError.js", ["server"]);

  api.export("ApiUmbrellaWeb", ["server"]);
});

Package.onTest(function (api) {
  api.use(["tinytest", "underscore"]);
  api.use("apinf:api-umbrella");

  api.addFiles("tests/server/configuration-tests.js", ["server"]);
  api.addFiles("tests/server/admin-api/v1/adminUsers.js", ["server"]);
  api.addFiles("tests/server/admin-api/v1/apiUsers.js", ["server"]);
  api.addFiles("tests/server/admin-api/v1/apiBackends.js", ["server"]);
  api.export("apiUmbrellaWeb", ["server"]);
});
