Package.describe({
  name: "brylie:api-umbrella",
  summary: "Wrapper for API Umbrella Admin API.",
  version: "0.1.0",
  git: "https://github.com/brylie/meteor-api-umbrella"
});

Package.onUse(function(api) {
  api.versionsFrom("1.0.1");
  api.use(["meteor", "ddp", "jquery"]);

  api.addFiles("shared/index.js", ["client", "server"]);
  
  api.export("apiUmbrella");
});

Package.onTest(function (api) {
  api.use("tinytest");
  api.use("brylie:api-umbrella");

  api.addFiles("tests/shared/index.js", ["client", "server"]);
});
