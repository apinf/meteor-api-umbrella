Package.describe({
  name: "brylie:api-umbrella",
  summary: "Wrapper for API Umbrella Admin API.",
  version: "0.2.8",
  git: "https://github.com/brylie/meteor-api-umbrella"
});

Package.onUse(function(api) {
  api.versionsFrom("1.0.1");
  api.use(["http", "underscore"]);
  api.imply(["http", "underscore"]);

  api.addFiles("server/apiUmbrellaWeb.js", ["server"]);
  api.addFiles("server/admin-api/adminApi.js", ["server"]);
  api.addFiles("server/admin-api/v1/v1.js", ["server"]);
  api.addFiles("server/admin-api/v1/apiUsers.js", ["server"]);
  api.addFiles("server/admin-api/v1/adminUsers.js", ["server"]);
  api.addFiles("server/admin-api/v1/apiBackends.js", ["server"]);

  api.export("apiUmbrellaWeb", ["server"]);
});

Package.onTest(function (api) {
  api.use(["tinytest", "underscore"]);
  api.use("brylie:api-umbrella");

  api.addFiles("tests/server/configuration-tests.js", ["server"]);
  api.addFiles("tests/server/admin-api/v1/adminUsers.js", ["server"]);
  api.addFiles("tests/server/admin-api/v1/apiUsers.js", ["server"]);
  api.addFiles("tests/server/admin-api/v1/apiBackends.js", ["server"]);
  api.export("apiUmbrellaWeb", ["server"]);
});
