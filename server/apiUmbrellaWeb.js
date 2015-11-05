// Allow self-signed SSL certificates via HTTPS
// https://github.com/meteor/meteor/issues/2866#issuecomment-59908923
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

/*
Define an object to interact with API Umbrella Admin API
Documentation site: http://apiumbrella.io/docs/admin-api/
*/

/**
 * API Umbrella Web REST interface
 * @param {object} config: Configuration object
 * @param {string} config.baseUrl: Base URL for API Umbrella Web
 * @param {object} config.headers: Headers added to each request
 * @param {string} config.headers.xApiKey: API Key for API Umbrella user
 * @param {string} config.headers.xAdminAuthToken: API Umbrella authentication token
*/
ApiUmbrellaWeb = function (config) {
  this.baseUrl = config.baseUrl;
  this.headers = {
    "X-Api-Key": config.requestHeaders.xApiKey,
    "X-Admin-Auth-Token": config.requestHeaders.xAdminAuthToken,
    "Content-Type": "application/json",
    "Accept": "application/json"
  };
};
