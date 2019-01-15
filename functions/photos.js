const request = require('request');

exports.handler = function(event, context, callback) {
    event.queryStringParameters.api_key = process.env.REACT_APP_API_KEY;

    request.get({
        uri: 'https://api.flickr.com/services/rest/',
        qs: event.queryStringParameters
        }, (err, res, body) => {
        if (err) {
            console.log(err);
        }
        callback(null, {
            statusCode: 200,
            body
        });
    });
}