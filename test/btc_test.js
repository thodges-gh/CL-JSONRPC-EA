const assert = require("chai").assert;
const createRequest = require("../index.js").createRequest;

/**
 * Running these tests requires a connection to a Bitcoin client.
 * Not all supported methods have a test case, just enough to display capability.
 */

describe("Bitcoin client", () => {
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

    context("getinfo", () => {

        const req = {
            id: jobID,
            data: {
                method: "getinfo"
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