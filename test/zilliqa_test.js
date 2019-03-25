const assert = require("chai").assert;
const createRequest = require("../index.js").createRequest;

/**
 * Running these tests requires a connection to a Zilliqa client.
 * Not all supported methods have a test case, just enough to display capability.
 */

describe("Zilliqa client", () => {
    const jobID = "278c97ffadb54a5bbb93cfec5f7b5503";

    context("Unrecognized method", () => {

        const req = {
            id: jobID,
            data: {
                method: "no_op"
            }
        };

        it("returns error to the node", (done) => {
            createRequest(req, (statusCode, data) => {
                assert.equal(data.jobRunID, jobID);
                assert.equal(data.status, "errored");
                done();
            });
        });
    });

    context("GetNetworkId", () => {

        const req = {
            id: jobID,
            data: {
                method: "GetNetworkId",
                params: [""]
            }
        };

        it("returns data to the node", (done) => {
            createRequest(req, (statusCode, data) => {
                assert.equal(statusCode, 200);
                assert.equal(data.jobRunID, jobID);
                assert.isNotEmpty(data.data);
                done();
            });
        });
    });

    context("GetBalance", () => {

        const req = {
            id: jobID,
            data: {
                method: "GetBalance",
                params: ["cf8919e41231e78c0f0efd7e63ae07247e022b4f"]
            }
        };

        it("returns data to the node", (done) => {
            createRequest(req, (statusCode, data) => {
                assert.equal(statusCode, 200);
                assert.equal(data.jobRunID, jobID);
                assert.isNotEmpty(data.data);
                done();
            });
        });
    });

    context("GetSmartContractState", () => {

        const req = {
            id: jobID,
            data: {
                method: "GetSmartContractState",
                params: ["fe001824823b12b58708bf24edd94d8b5e1cfcf7"]
            }
        };

        it("returns data to the node", (done) => {
            createRequest(req, (statusCode, data) => {
                assert.equal(statusCode, 200);
                assert.equal(data.jobRunID, jobID);
                assert.isNotEmpty(data.data);
                done();
            });
        });
    });
});
