# brylie:api-umbrella
[API Umbrella](http://apiumbrella.io) is a proxy that sits in front of your APIs. It can seamlessly add common functionality like api keys, rate limiting, and analytics to any API. The API Umbrella platform has a REST API for managing users, API Endpoints, etc.

This package provides helper methods to interact with the [API Umbrella Admin API](http://apiumbrella.io/docs/admin-api/).

# Installation
Install the package in your project with the following command:
```
meteor add brylie:api-umbrella
```

# Configuration
Once you have added the package, you will need to extend the [Meteor.settings](http://docs.meteor.com/#/full/meteor_settings) object with the following (e.g. in `settings.json`):

```
{
  "api_umbrella": {
    "api_key": "...", // API key for administrative user
    "auth_token": "..." // Authentication token for administrative user
    "base_url": "" // Base URL for Admin API (without version). E.g. http://api.com/api-umbrella/
  }
}
```

**Note:** The `api_key` and `auth_token` values only need to be available on the server, and *should not be public*.

#Start Meteor
Once you have created a Meteor.settings file (following the [Meteor.settings documentation](http://docs.meteor.com/#/full/meteor_settings), if needed), run your project with the `--settings` flag followed by your config file (e.g. `settings.json`):

```
meteor --settings settings.json
```

# Usage
## Structure
This package exports an object called `apiUmbrellaWeb`. `apiUmbrellaWeb` has the following structure:

* adminApi
  * v1
    * getUser
    * getUsers
    * createUser
    * getApiBackend
    * getApiBackends
    * createApiBackend
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
