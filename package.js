Package.describe({
  name: "brylie:api-umbrella",
  summary: "Wrapper for API Umbrella Admin API.",
  version: "0.1.2",
  git: "https://github.com/brylie/meteor-api-umbrella"
});

Package.onUse(function(api) {
  api.versionsFrom("1.0.1");
  api.use(["meteor"]);

  api.addFiles("server/web-admin-api.js", ["server"]);

  api.export("apiUmbrella", ["server"]);
});

Package.onTest(function (api) {
  api.use("tinytest");
  api.use("brylie:api-umbrella");

  api.addFiles("tests/server/web-admin-api.js", ["server"]);
});
