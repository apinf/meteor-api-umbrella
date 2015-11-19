/**
 * Define an API-Umbrella specific Error type
 * This error prototypally inherits from the Error constructor.
 * See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error
 *
 * @constructor
 * @param {object|string} originalError - Original HTTP.call error thrown.
 */
ApiUmbrellaError = function (originalError) {
  if (originalError.message) {
    // originalError should be an Error object, with message attribute.
    this.message = originalError.message;
  } else {
    // if it is not an Error, assumes it is a string with the error message.
    this.message = originalError;
  }

  // Parses the message returned by api-umbrella backend and captured by HTTP.call
  // Ex:
  //  'failed [422] {"errors":{"backend_protocol":["is not included in the list"]}'
  var parseErrorMessage = /failed \[(\d+)\] ({.+})/.exec(this.message);
  if (typeof(parseErrorMessage) === 'object' &&
      parseErrorMessage.length === 5) {
    // Only changes the Error name if its message got parsed.
    this.name = 'ApiUmbrellaError';

    // Assigns the http_status number, e.g. 422
    this.http_status = JSON.parse(parsedErrorMessage[1]);

    // Assigns the backend_errors as JSON, e.g. {"backend_protocol":["is not included in the list"]}
    this.backend_errors = JSON.parse(parsedErrorMessage[2].errors);
  }
  this.stack = (new Error()).stack;
}
ApiUmbrellaError.prototype = Object.create(Error.prototype);
ApiUmbrellaError.prototype.constructor = ApiUmbrellaError;
