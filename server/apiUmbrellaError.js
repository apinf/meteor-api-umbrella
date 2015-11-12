/**
 * Define an API-Umbrella specific Error type
 * This error prototypally inherits from the Error constructor.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error
 */
ApiUmbrellaError = function (messageOrError) {
  this.name = 'ApiUmbrellaError';
  this.message = messageOrError.message || messageOrError || 'ApiUmbrellaError';
  // Parses HTTP.error containing a string message
  // Ex:
  //  'failed [422] {"errors":{"backend_protocol":["is not included in the list"]}'
  var parseErrorMessage = /failed \[(\d+)\] ({.+})/.exec(this.message);
  if (typeof(parseErrorMessage) === 'object' &&
      parseErrorMessage.length === 5) {
    // Assigns the http_status number, e.g. 422
    this.http_status = JSON.parse(parsedErrorMessage[1]);

    // Assigns the backend_errors as JSON, e.g. {"backend_protocol":["is not included in the list"]}
    this.backend_errors = JSON.parse(parsedErrorMessage[2].errors);
  } else {
    this.http_status = 'undefined';
    this.backend_errors = 'undefined';
  }
  this.stack = (new Error()).stack;
}
ApiUmbrellaError.prototype = Object.create(Error.prototype);
ApiUmbrellaError.prototype.constructor = ApiUmbrellaError;
