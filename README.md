# brylie:api-umbrella
[API Umbrella](http://apiumbrella.io) is a proxy that sits in front of your APIs. It can seamlessly add common functionality like api keys, rate limiting, and analytics to any API. The API Umbrella platform has a REST API for managing users, API Endpoints, etc.

This package provides helper methods to interact with the [API Umbrella Admin API](http://apiumbrella.io/docs/admin-api/).

# Installation
Install the package in your project with the following command:
```
meteor add brylie:api-umbrella
```

# Configuration
Once you have added the package, you will need to extend the [Meteor.settings](http://docs.meteor.com/#/full/meteor_settings) object with the following (e.g. in `settings.json` in your project root directory):

```
{
  "apiUmbrella": {
    "apiKey": "...",
    "authToken": "...",
    "baseUrl": "..."
  }
}
```
## Configuration values
The Meteor settings object should contain a sub-object called `api_umbrella`. Within the `api_umbrella` object, define three properties:

* `apiKey` - API key for administrative user
* `authToken` - Authentication token for administrative user
* `baseUrl` - Base URL for Admin API (without version number, and with trailing slash). E.g. http://example.com/api-umbrella/

**Note:** The `apiKey` and `authToken` values only need to be available on the server, and *should not be public*.

### Obtaining API Key and Authentication token

You can obtain the *Authentication Token* and *API Key* from the API Umbrella platform by following instructions in the [Getting Started](http://apiumbrella.io/docs/getting-started/) and [API Umbrella Admin API](http://apiumbrella.io/docs/admin-api/) documentation.

# Start Meteor
Once you have created a Meteor.settings file (following the [Meteor.settings documentation](http://docs.meteor.com/#/full/meteor_settings), if needed), run your project with the `--settings` flag followed by your config file (e.g. `settings.json`):

```
meteor --settings settings.json
```

# Usage
## Structure
This package exports an object called `ApiUmbrellaWeb`. You can create a new instance of `ApiUmbrellaWeb` as follows, where `config` contains:

```JavaScript
var config = {
  apiKey: 'Meteor.settings.apiUmbrella.apiKey',
  authToken: 'Meteor.settings.apiUmbrella.authToken',
  baseUrl: 'Meteor.settings.apiUmbrella.baseUrl'
};

var apiUmbrellaWeb = new ApiUmbrellaWeb(config);
```


`ApiUmbrellaWeb` has the following structure:

* adminApi
  * v1
    * apiUsers
      * getUser
      * getUsers
      * createUser
    * apiBackends
      * getApiBackend
      * getApiBackends
      * createApiBackend
    * adminUsers
      * getAdmin
      * getAdmins
      * createAdmin

This structure conforms with the basic organization of the [API Umbrella Web](https://github.com/NREL/api-umbrella-web) project, and allows the package to mirror the versioning of the [API Umbrella Admin API](http://apiumbrella.io/docs/admin-api/).

## Methods

### API Users
* getUser (id) - gets a specific user by ID
* createUser (object) - create a new user given a user object
* getUsers - gets all users

### API Backends
* getApiBackend (id) - gets a specific API backend by ID
* getApiBackends - gets all API backends
* createApiBackend (object) - create a new API Backend given an API Backend object

### Admin Users
* getAdmin (id) - get specific admin user by ID
* getAdmins - get all admin users
* createAdmin (object) - create a new Admin user given a user object

# Unit Testing
In order to run unit tests on this package, make sure you have met the following set-up conditions:

1. a working API Umbrella instance
2. a valid config file (e.g. settings.json)
3. a testing project with this package sourcecode downloaded (e.g. in the /packages directory)

Then, run the following command in your project directory:

```
meteor --settings settings.json test-packages packages/api-umbrella/
```

**Note:** As this package is a thin wrapper around the *API Umbrella Admin API*, the unit tests are also relatively simple. Please file an issue or support request, if you have an alternative test strategy or need other help with testing.
