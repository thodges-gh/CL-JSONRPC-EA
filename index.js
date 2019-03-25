const request = require("request");

const createRequest = (input, callback) => {
    const url = process.env.RPC_URL || input.data.url || "http://localhost:8545";
    const method = input.data.method || "";
    const params = input.data.params;
    let dataQuery = {
        id: input.id,
        jsonrpc: "2.0",
        method: method,
        params: params
    };
    let options = {
        url: url,
        headers: {
            "Content-Type": "application/json"
        },
        rejectUnauthorized: false,
        body: dataQuery,
        json: true
    };
    // Removes undefined values (if params were not given)
    request.post(JSON.parse(JSON.stringify(options)), (error, response, body) => {
        if (error || response.statusCode >= 400 || body.error) {
            callback(response.statusCode, {
                jobRunID: input.id,
                status: "errored",
                error: body,
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
};

module.exports.createRequest = createRequest;
