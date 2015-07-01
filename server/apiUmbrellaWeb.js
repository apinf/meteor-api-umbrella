// Allow self-signed SSL certificates via HTTPS
// https://github.com/meteor/meteor/issues/2866#issuecomment-59908923
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

/*
Define an object to interact with API Umbrella Admin API
Documentation site: http://apiumbrella.io/docs/admin-api/
*/
apiUmbrellaWeb = {
  "baseUrl": Meteor.settings.api_umbrella.base_url,
  "requestHeaders": {
    "X-Api-Key": Meteor.settings.api_umbrella.api_key,
    "X-Admin-Auth-Token": Meteor.settings.api_umbrella.auth_token,
    "Content-Type": "application/json",
    "Accept": "application/json"
  }
};
