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
 * @param {string} config.apiKey: API Key for API Umbrella user
 * @param {string} config.authToken: API Umbrella authentication token
*/
ApiUmbrellaWeb = function (config) {
  // Get reference to 'this' for methods to use
  var self = this;

  self.baseUrl = config.baseUrl;
  self.headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
    "X-Admin-Auth-Token": config.authToken,
    "X-Api-Key": config.apiKey,
  };

  // Admin API object, to hold versioned API facades
  self.adminApi = {};

  // Version 1 of the Admin API
  self.adminApi.v1 = {
    // URL prefixes for REST calls
    urlPrefixes: {
      "admins": "v1/admins/",
      "apis": "v1/apis/",
      "config": "v1/config/",
      "users": "v1/users/"
    }
  };

  /*
  * API backends
  * Version 1
  */
  self.adminApi.v1.apiBackends = {
    /*
    Get a specific API backend given an ID
    return the JSON response object
    */
    getApiBackend: function (id)  {
      // Set up the urlPrefix
      var urlPrefix = self.adminApi.v1.urlPrefixes.apis;

      // Set up request url with ID
      var url = self.baseUrl + urlPrefix + id;

      try {
        // Make GET request to API Umbrella
        var response = HTTP.get(url, {headers: self.headers});
      } catch (error) {
        // Enhance error with http_status and backend_errors properties
        throw new ApiUmbrellaError(error);
      }

      return response;
    },
    /*
    Create a new API Backend
    given a backend object
    return the response object
    */
    createApiBackend: function (backendObject) {
      // Set up the urlPrefix
      var urlPrefix = self.adminApi.v1.urlPrefixes.apis;

      // Create the URL
      var url = self.baseUrl + urlPrefix;

      // Create temporary options object
      var localOptions = {headers: self.headers};

      // Extend the Options object with the Backend object
      localOptions.data = backendObject;

      try {
        // Make POST request to create new backend
        var response = HTTP.post(url, localOptions);
      } catch (error) {
        // Enhance error with http_status and backend_errors properties
        throw new ApiUmbrellaError(error);
      }

      return response;
    },
    /*
    Get all API backends
    return the JSON response object
    */
    getApiBackends: function () {
      // // Set up the urlPrefix
      var urlPrefix = self.adminApi.v1.urlPrefixes.apis;

      // Set up request url
      var url = self.baseUrl + urlPrefix;

      try {
        // Make GET request to API Umbrella
        var response = HTTP.get(url, {headers: self.headers});
      } catch (error) {
        // Enhance error with http_status and backend_errors properties
        throw new ApiUmbrellaError(error);
      }

      return response;
    }
  };

  /*
  * Admin users
  * Version 1
  */
  self.adminApi.v1.adminUsers = {
    /*
    Get a specific admin account given an ID
    return the JSON response object
    */
    getAdmin: function (id) {
      // Set up the urlPrefix
      var urlPrefix = self.adminApi.v1.urlPrefixes.admins;

      // Set up request url with ID
      var url = self.baseUrl + urlPrefix + id;

      try {
        // Make GET request to API Umbrella
        var response = HTTP.get(url, {headers: self.headers});
      } catch (error) {
        // Enhance error with http_status and backend_errors properties
        throw new ApiUmbrellaError(error);
      }

      return response;
    },
    /*
    Create a new Admin user
    given a user object
    return the response object
    */
    createAdmin: function (userObject) {
      // Set up the urlPrefix
      var urlPrefix = self.adminApi.v1.urlPrefixes.admins;

      // Create the URL
      var url = self.baseUrl + urlPrefix;

      // Create the options object
      var localOptions = {headers: self.headers};

      // Extend the Options object with the User object
      localOptions.data = userObject;

      try {
        // Make POST request to create new user
        var response = HTTP.post(url, localOptions);
      } catch (error) {
        // Enhance error with http_status and backend_errors properties
        throw new ApiUmbrellaError(error);
      }

      return response;
    },
    /*
    Get all admin users
    return the JSON response object
    */
    getAdmins: function () {
      // Set up the urlPrefix
      var urlPrefix = self.adminApi.v1.urlPrefixes.admins;

      // Set up request url
      var url = self.baseUrl + urlPrefix;

      try {
        // Make GET request to API Umbrella
        var response = HTTP.get(url, {headers: self.headers});
      } catch (error) {
        // Enhance error with http_status and backend_errors properties
        throw new ApiUmbrellaError(error);
      }

      return response;
    }
  };

  /*
  * API users
  * Version 1
  */
  self.adminApi.v1.apiUsers = {
    /*
    Get a specific user given an ID
    return the JSON user object or error
    */
    getUser: function (id) {
      // Set up the urlPrefix
      var urlPrefix = self.adminApi.v1.urlPrefixes.users;

      // Set up request url with ID
      var url = self.baseUrl + urlPrefix + id;

      try {
        // Make GET request to API Umbrella
        var response = HTTP.get(url, {headers: self.headers});
      } catch (error) {
        // Enhance error with http_status and backend_errors properties
        throw new ApiUmbrellaError(error);
      }

      return response;
    },
    /*
    Create a new API Umbrella user
    given a user object
    return the response object
    */
    createUser: function (userObject) {
      // Set up the urlPrefix
      var urlPrefix = self.adminApi.v1.urlPrefixes.users;

      // Create the URL
      var url = self.baseUrl + urlPrefix;

      // Create temporary options object
      var localOptions = {headers: self.headers};

      // Extend the Options object with the User object
      localOptions.data = userObject;

      try {
        // Make POST request to create new user
        var response = HTTP.post(url, localOptions);
      }  catch (error) {
        // Enhance error with http_status and backend_errors properties
        throw new ApiUmbrellaError(error);
      }

      return response;
    },
    /*
    Get all users
    return the JSON response object
    */
    getUsers: function () {
      // Set up the urlPrefix
      var urlPrefix = self.adminApi.v1.urlPrefixes.users;

      // Set up request url
      var url = self.baseUrl + urlPrefix;

      // Make GET request to API Umbrella
      var response = HTTP.get(url, {headers: self.headers});

      return response;
    }
  };

  /*
  * System configuration, including API Backends
  * Version 1
  */
  self.adminApi.v1.config = {

    /*
    Get all Config Changes
    return the JSON response object
    or throw an error
    */
    getPendingChanges: function () {
      // Placeholder for response object
      var response;

      // // Set up the urlPrefix
      var urlPrefix = self.adminApi.v1.urlPrefixes.config;

      // Set up request url
      var url = self.baseUrl + urlPrefix + "pending_changes";

      try {
        // Make GET request to API Umbrella
        response = HTTP.get(url, {headers: self.headers});
      } catch (error) {
        // Enhance error with http_status and backend_errors properties
        throw new ApiUmbrellaError(error);
      }

      return response;
    },
    /*
    Publish Config Changes
    return the JSON response object
    or throw an error
    Expects publicationObject with the following structure
    {
      "config": {
        "apis": {
          "API_BACKEND_ID_HERE": { "publish": 1 },
          "ADDITIONAL_API_BACKEND_ID_HERE": { "publish": 1 }
        }
      }
    }
    */
    publish: function (publicationObject) {
      // Placeholder for response object
      var response;

      // // Set up the urlPrefix
      var urlPrefix = self.adminApi.v1.urlPrefixes.config;

      // Set up request url
      var url = self.baseUrl + urlPrefix + "publish";

      // Create temporary options object
      var localOptions = {headers: self.headers};

      // Extend the Options object with the User object
      localOptions.data = publicationObject;

      try {
        // Make GET request to API Umbrella
        response = HTTP.post(url, localOptions);
      } catch (error) {
        // Enhance error with http_status and backend_errors properties
        throw new ApiUmbrellaError(error);
      }

      return response;
    },
    /*
    Publish changes for a single API Backend by ID
    */
    publishSingleApiBackend: function (apiBackendId) {
      // Placeholder for response object
      var response;

      // // Set up the urlPrefix
      var urlPrefix = self.adminApi.v1.urlPrefixes.config;

      // Set up request url
      var url = self.baseUrl + urlPrefix + "publish";

      // Create temporary options object
      var localOptions = {headers: self.headers};

      // Extend the Options object with the User object
      localOptions.data = {
        "config": {
          "apis": {}
        }
      };

      // Add API to config.apis object using bracket notation
      localOptions.data.config.apis[apiBackendId] = {"publish": "1"};

      try {
        // Make GET request to API Umbrella
        response = HTTP.post(url, localOptions);
      } catch (error) {
        // Enhance error with http_status and backend_errors properties
        throw new ApiUmbrellaError(error);
      }

      return response;
    }
  };
};
