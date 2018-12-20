let request = require('request');

const createRequest = (input, callback) => {
  const url = input.data.url || process.env.RPC_URL || "http://localhost:8545";
  const method = input.data.method || "";
  const params = input.data.params || [];
  const headerObj = {
    "Content-Type": "application/json"
  }
  const dataQuery = {
    id: input.id,
    jsonrpc: "2.0",
    method: method,
    params: params
  }
  let options = {
    url: url,
    headers: headerObj,
    body: dataQuery,
    json: true
  }
  request.post(options, (error, response, body) => {
    if (error || response.statusCode >= 400 || body.error) {
      callback(response.statusCode, {
        jobRunID: input.id,
        status: "errored",
        error: body.error.message,
        statusCode: response.statusCode
      });
    } else {
      callback(response.statusCode, {
        jobRunID: input.id,
        data: body,
        statusCode: response.statusCode
      });
    }
  });
};

exports.gcpservice = (req, res) => {
  createRequest(req.body, (statusCode, data) => {
    res.status(statusCode).send(data);
  });
};

exports.handler = (event, context, callback) => {
  createRequest(event, (statusCode, data) => {
    callback(null, data);
  });
}

module.exports.createRequest = createRequest;