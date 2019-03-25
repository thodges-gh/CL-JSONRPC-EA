const assert = require("chai").assert;
const createRequest = require("../index.js").createRequest;

/**
 * Running these tests requires a connection to an AION client.
 * Not all supported methods have a test case, just enough to display capability.
 */

describe("AION client", () => {
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

    context("eth_getBalance", () => {

        const req = {
            id: jobID,
            data: {
                method: "eth_getBalance",
                params: ["0xa00983f07c11ee9160a64dd3ba3dc3d1f88332a2869f25725f56cbd0be32ef7a", "latest"]
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

    context("eth_syncing", () => {

        const req = {
            id: jobID,
            data: {
                method: "eth_syncing"
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

    context("eth_gasPrice", () => {

        const req = {
            id: jobID,
            data: {
                method: "eth_gasPrice"
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

    context("eth_blockNumber", () => {

        const req = {
            id: jobID,
            data: {
                method: "eth_blockNumber"
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

    context("eth_getTransactionByHash", () => {

        const req = {
            id: jobID,
            data: {
                method: "eth_getTransactionByHash",
                params: ["0xe14a430e1a4131d32ddc1dd00f1b997ca2ba6812216af1f8e398d36bfd337d8e"]
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

    context("eth_getTransactionReceipt", () => {

        const req = {
            id: jobID,
            data: {
                method: "eth_getTransactionReceipt",
                params: ["0xe14a430e1a4131d32ddc1dd00f1b997ca2ba6812216af1f8e398d36bfd337d8e"]
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
