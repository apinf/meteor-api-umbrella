# brylie:api-umbrella
[API Umbrella](http://apiumbrella.io) is a proxy that sits in front of your APIs. It can seamlessly add common functionality like api keys, rate limiting, and analytics to any API. The API Umbrella platform has a REST API for managing users, API Endpoints, etc.

This package provides helper methods to interact with the [API Umbrella Admin API](http://apiumbrella.io/docs/admin-api/).

## Installation
Install the package in your project with the following command:
```
meteor add brylie:api-umbrella
```

## Configuration
Once you have added the package, you will need to extend the [Meteor.settings](http://docs.meteor.com/#/full/meteor_settings) object with the following:

```
{
  "apiUmbrella": {
    "api_key": "...", // API key for administrative user
    "auth_token": "..." // Authentication token for administrative user
    "base_url": "..." // Base URL for Admin API (e.g. http://example.com/api-umbrella/v1/)
  }
}
```

The `api_key` and `auth_token` values only need to be available on the server, and *should not be public*.

## Usage
### apiUmbrellaWeb methods
This package exports an object called `apiUmbrellaWeb`, that contains the following methods:

* getUser (id) - gets a specific user by ID
* getUsers - gets all users
* getApiBackend (id) - gets a specific API backend by ID
* getApiBackends - gets all API backends
